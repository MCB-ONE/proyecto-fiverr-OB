import React, { useState } from 'react';
import {
  Button, Box, Paper, TextField,
} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import axios from 'axios';
import Logo from '../../public/images/logo.svg';

const registerUser = async (user) => {
  const {
    username,
    password,
    email,
    name,
    phone = null,
    businessTitle = null,
  } = user;
  return axios
    .post('https://proyecto-fiverr.herokuapp.com/api/register', {
      username,
      password,
      email,
      name,
      phone,
      businessTitle,
    })
    .then((res) => res.data);
};

const CustomInput = ({ label, type, ...restOfProps }) => {
  return (
    <TextField
      label={label || 'label'}
      type={type || 'text'}
      margin="normal"
      size="small"
      fullWidth
      {...restOfProps}
    />
  );
};

const RegisterPage = () => {
  const [newUser, setNewUser] = useState({});

  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(newUser)
      .then(() => enqueueSnackbar('¡Registardo exitosamente!', { variant: 'success' }))
      .then(() => history.push('/login'))
      .catch(() => enqueueSnackbar('Error en los datos', { variant: 'error' }));
  };

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1dbf73',
        padding: '100px 0',
      }}
    >
      <Paper
        sx={{
          maxWidth: '400px',
          padding: 4,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={Logo}
          alt="Logo Fiverr"
          style={{ width: '150px', margin: '16px auto 32px' }}
        />
        <h2>Únete a Fiverr</h2>

        <p>
          ¿Ya tienes cuenta?
          {' '}
          <Link to="/login">Inicia sesión</Link>
        </p>

        <form onSubmit={handleSubmit}>
          <CustomInput
            id="name"
            label="Nombre"
            type="text"
            onChange={handleChange}
            required
          />
          <CustomInput
            id="username"
            label="Username"
            type="text"
            onChange={handleChange}
            required
          />
          <CustomInput
            id="email"
            label="Emails"
            type="email"
            onChange={handleChange}
            required
          />
          <CustomInput
            id="password"
            label="Contraseña"
            type="password"
            onChange={handleChange}
            required
          />
          <CustomInput
            id="phone"
            label="Teléfono"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
            placeholder="123-456-7890"
          />
          <CustomInput
            id="businessTitle"
            label="Título en tu empresa"
            type="text"
            onChange={handleChange}
          />

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
            REGISTRARSE
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
