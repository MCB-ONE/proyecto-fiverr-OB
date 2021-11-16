import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/config/themeConfig';

/** Import pages and components */
import Navbar from './headers/NavBar';
import ServicesPage from '../pages/ServicesPage';
import NotFoundPage from '../pages/NotFoundPage';
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
              <Route path="/web-services" component={ServicesPage} />
              <Route exact path="/" component={ServicesPage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Router>
        </ThemeProvider>
    );
};

export default App;
