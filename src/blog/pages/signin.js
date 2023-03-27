import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useQuery } from '@tanstack/react-query';
import apiCall from '../../services/apiCall';
import { useState } from 'react';

const SignIn = () => {
  const [data, setData] = useState({})

  const signinQuery = useQuery({
    queryKey: ["sign-in"],
    enabled: Boolean(data.email && data.password),
    queryFn: async () => {
      try {
        const response = await apiCall.get("/users?email=" + data.email + "&password=" + data.password);
        if (response.data[0]) {
          const d = {
            id: response.data[0]?.id,
            name: response.data[0]?.name,
            username: response.data[0]?.username,
            email: response.data[0]?.email,
          }
          localStorage.setItem("user", JSON.stringify(d));
          localStorage.setItem("loggedIn", 1);
        }
        else {
          localStorage.setItem("user", JSON.stringify({}));
          localStorage.setItem("loggedIn", 0);
        }
        setData({})
        return response.data;
      } catch (error) {
        localStorage.setItem("loggedIn", 0);
        localStorage.setItem("user", JSON.stringify({}));
        console.log(error);
        return [];
      }
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    setData({
      email: data.get('email'),
      password: data.get('password'),
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {
              signinQuery.isLoading ? 'Loading...' : 'Sign In'
            }
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;