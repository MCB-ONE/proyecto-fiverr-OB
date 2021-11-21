import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Button, Box, Paper, TextField,
} from '@mui/material';

import { useSnackbar } from 'notistack';
import axios from 'axios';
import Logo from '../../public/images/logo.svg';

const loginUser = async ({ username, password }) => {
  return axios
    .post('https://proyecto-fiverr.herokuapp.com/api/login', {
      username,
      password,
    })
    .then((res) => res.data.token);
};

const LoginPage = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser({
      username,
      password,
    })
      .then((token) => {
        localStorage.setItem('token', token);
        window.dispatchEvent(new Event('storage'));
        history.push('/services');
      })
      .catch((error) => {
        console.log('login error:', error);
        enqueueSnackbar('Error en los datos', { variant: 'error' });
      });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '80px',
        width: { xs: '95%' },
        margin: { xs: '0 auto' },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: '400px',
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 5px 11px 1px #0000002a',
        }}
      >
        <img
          src={Logo}
          alt="Logo Fiverr"
          style={{ width: '150px', margin: '16px auto 32px' }}
        />
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Username"
            type="text"
            margin="normal"
            size="small"
            fullWidth
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            margin="normal"
            size="small"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            ¿No tienes cuenta?
            {' '}
            <Link to="/register">Regístrate</Link>
          </p>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: '#1dbf73',
              marginTop: 2,
              '&:hover': {
                bgcolor: '#148550',
              },
            }}
          >
            Iniciar Sessión
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
