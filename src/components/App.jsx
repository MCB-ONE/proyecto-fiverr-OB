import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Redirect } from 'react-router';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import theme from '../utils/config/themeConfig';

/** Import pages and components */
import Navbar from './headers/NavBar';
import ServicesPage from '../pages/ServicesPage';
import NotFoundPage from '../pages/NotFoundPage';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProtectedRoute from './pure/ProtectedRoute';

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  const [logged, setLogged] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (localStorage.getItem('token')) {
      setLogged(token);
    }

    window.addEventListener('storage', () => {
      const checkToken = localStorage.getItem('token');
      if (localStorage.getItem('token')) {
        setLogged(checkToken);
      } else {
        setLogged(false);
      }
    });
  }, []);

  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar logged={logged} />
          <Switch>
            <Redirect exact from="/" to="services" />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <ProtectedRoute path="/services" component={ServicesPage} />
            <ProtectedRoute path="/service/:id" component={ServiceDetailsPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
