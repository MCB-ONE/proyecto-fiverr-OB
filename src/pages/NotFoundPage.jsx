import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/css/pageNotFound.scss';

const NotFoundPage = () => {
  const history = useHistory();
  const handleRoute = () => {
    history.push('/services');
  };
    return (
      <div className="page-content page-not-found">
        <div className="header">
          <h1>404</h1>
        </div>
        <div className="body">
          <div className="container">
            <h2>Página No Encontrda</h2>
            <p>Pordón, la página a la que intenta acceder no existe.</p>
            <Button
              variant="contained"
              className="btn-white"
              onClick={() => handleRoute()}
            >
              Incio
            </Button>
          </div>
        </div>
      </div>
    );
};

export default NotFoundPage;
