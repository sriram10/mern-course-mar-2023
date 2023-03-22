import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import BlogRoot from './blog';
import SignUp from './blog/pages/signup';
import SignIn from './blog/pages/signin';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './blog/pages/home';

const theme = createTheme();

/**
 * / - Home Page
 * /login - Login Page
 * /register - Register Page
 * /about - About
 * /blog/slug - Blog Page
 * 
 * - Every page should have navigation bar at the top
 * - Navigation should indicate which page is currently active
 * 
 * - Home
 * - Login
 * - Register
 * - Details - Some welcome message and child links
 * - Detials/about - some about content
 * 
 */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<BlogRoot />}>
            <Route index element={<Home />} />
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
