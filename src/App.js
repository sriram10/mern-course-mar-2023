import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import Navigation from './components/Navigation';
import BlogRoot from './blog';
import SignUp from './blog/pages/signup';
import SignIn from './blog/pages/signin';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './blog/pages/home';
import queryClient from './services/queryClient';
import TableSection from './day3/TableSection';
import ReduxSample from './redux';

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
 * - Details/about - some about content
 * 
 */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<BlogRoot />}>
              <Route index element={<Home />} />
              <Route path="login" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="about" element={<h1>About</h1>} />
              <Route path="table" element={<TableSection />} />
              <Route path="401" element={<h1>Unauthorized access</h1>} />
              <Route path="redux" element={<ReduxSample />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App;
