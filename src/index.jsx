// Imports de React
import React from 'react';
import ReactDOM from 'react-dom';

// Imports de Redux
import { Provider } from 'react-redux';

// Import funtion to create store
import configureStore from './store/config/configureStore';

import App from './components/App';

// Importamos las hojas de estilos
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga
// We create the app store
// eslint-disable-next-line prefer-const
let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
    document.getElementById('root'),
);
