import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { API_GET_REQUEST } from '../store/reducers/vendorsReducers';
/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(API_GET_REQUEST);
  }, [dispatch]);
  const vendors = useSelector((state) => state.vendors);
  console.log(vendors);
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
