import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Redirect } from 'react-router';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/config/themeConfig';

/** Import pages and components */
import Navbar from './headers/NavBar';
import ServicesPage from '../pages/ServicesPage';
import NotFoundPage from '../pages/NotFoundPage';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
      return (
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/services" component={ServicesPage} />
              <Route path="/service/:id" component={ServiceDetailsPage} />
              <Redirect exact from="/" to="services" />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Router>
        </ThemeProvider>
    );
};

export default App;
