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
// import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';



const formSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string(),
  email: Yup.string().email('Please enter a valid email').required('Please enter a valid email'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required(),
})

const SignUp = () => {
  const { authorized } = useAuth()

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {},
    validateOnChange: false,
    validationSchema: formSchema,
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });


  console.log('SIGNIN', authorized)
  if (authorized) {
    return <Navigate to="/" />
  }

  // const [password, setPassword] = useState({
  //   value: '',
  //   error: false,
  //   helperText: '',
  // });

  // const handlePassword = (e) => {
  //   const value = (e.target.value).replace(/\s/g, '');
  //   setPassword({
  //     value,
  //     error: false,
  //     helperText: value.length === 0 ? '' : value.length < 6 ? 'Too short!' : 'Looks good!',
  //   })
  // }

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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={values.firstName}
                onChange={handleChange('firstName')}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={values.lastName}
                onChange={handleChange('lastName')}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange('email')}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                autoComplete="new-password"
                onChange={handleChange('password')}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={values.password === ''}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;