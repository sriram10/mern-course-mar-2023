import { NavLink, useNavigate } from 'react-router-dom';
import { Link, Button, Typography, AppBar, Toolbar } from '@mui/material';

const NavBarLink = ({ to, text }) => {
  return (
    <Link
      component={NavLink}
      to={to}
      variant="button"
      color="text.primary"
      sx={{ my: 1, mx: 1.5 }}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
        }
      }}
    >
      {text}
    </Link>
  )
}

function Navigation() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
          Logo
        </Typography>
        <nav>
          <NavBarLink to="/" text="Home" />
          <NavBarLink to="/login" text="Login" />
          <NavBarLink to="/signup" text="Register" />
          <NavBarLink to="/about" text="About" />
        </nav>
        {/* <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Sign In
        </Button> */}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation;