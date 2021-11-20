import React, { useEffect, useState } from 'react';
import {
  Box, Grid, Typography, Avatar, Divider, Paper, Button,
} from '@mui/material/';

import { AiFillStar } from 'react-icons/ai';

import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
import '../styles/css/serviceDetail.scss';

const ServiceDetailsPage = ({ match }) => {
  const { id } = match.params;
  const [service, setService] = useState({});
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    axios.get(`https://proyecto-fiverr.herokuapp.com/api/trabajos/${id}`)
      .then((response) => setService(response.data));
  }, [id]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then((response) => {
        setUserImage(response.data.results[0].picture.medium);
      })
      .catch((error) => {
        console.log(`Somethin went wrong: ${error}`);
      });
  }, []);

  const vendedor = service.vendedores ? service.vendedores[0] : '';
  const categorias = service.categorias ? service.categorias : [];
  const placeHolderImg = 'https://picsum.photos/500/300?random';

  return (
    <Paper elevation={0} className="detail" sx={{ padding: '32px 24px', margin: '120px auto', maxWidth: 800 }}>
      <Grid container spacing={3}>
        {/* Service description */}
        <Grid item xs={12}>
          <Typography variant="h4">
            {service.descripcion}
          </Typography>
        </Grid>
        {/* Seller Info */}
        <Grid item xs={12} sm={12}>
          <Box sx={{
            display: 'flex',
          }}
          >
            <Avatar alt="" src={userImage} style={{ marginRight: '14px' }} />
            <Box sx={{ display: 'flex', flexFlow: 'column' }}>
              <Typography variant="subtitle2" component="span" style={{ marginRight: '14px' }}>
                {vendedor.nombre}
              </Typography>
              <Box sx={{ marginTop: '-5px' }} className="review">
                <Typography variant="overline" component="span">
                  {vendedor.nivel}
                </Typography>
                <AiFillStar style={{ color: '#FFCD00' }} />
                <Typography variant="overline" component="span">
                  4.8
                </Typography>
              </Box>
            </Box>
            <Box
              className="price"
              sx={{
                fontWeight: 600, fontSize: 20, textAlign: 'center', display: { sm: 'flex', xs: 'none' }, flexFlow: 'column', justifyContent: 'space-between', marginLeft: 'auto',
              }}
            >
              <span>A PARTIR DE </span>
              <span>
                {service.precio}
                €
              </span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Divider orientation="horizontal" flexItem style={{ height: '1px', backgroundColor: '#e3e3e3' }} />
        </Grid>
        {/* Carousel */}
        <Grid item xs={12} sm={6}>
          <Carousel indicators interval={null}>
            <Carousel.Item>
              <img alt="" className="d-block w-100" src={`${placeHolderImg} slide`} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="" className="d-block w-100" src={`${placeHolderImg} slide`} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="" className="d-block w-100" src={`${placeHolderImg} slide`} />
            </Carousel.Item>
          </Carousel>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginTop: 5 }}>
            <Typography variant="h6">
              Categorias
            </Typography>
            <Typography variant="body1">
              {categorias.map((c) => c.nombre).join(', ')}
            </Typography>
          </Box>
        </Grid>

        {/* About */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Descripción del servicio
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </Typography>
          {/* Precio */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: { sm: 'none' } }}>
              <Typography variant="h6">
                Categorias
              </Typography>
              <Typography variant="body1">
                {categorias.map((c) => c.nombre).join(', ')}
              </Typography>
            </Box>
            <Box
              className="price"
              sx={{
                fontWeight: 600, fontSize: 20, textAlign: 'center', display: { xs: 'flex', sm: 'none' }, flexFlow: 'column', justifyContent: 'space-between',
              }}
            >
              <span>A PARTIR DE </span>
              <span>
                {service.precio}
                €
              </span>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: 0, marginBottom: 2 }}>
          <Grid container justifyContent="center">
            {/* El boton no me estaba tomando el color primario del tema */}
            <Button color="primary" variant="contained">
              Continuar (
              {`${service.precio}€`}
              )
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider orientation="horizontal" flexItem style={{ height: '1px', backgroundColor: '#e3e3e3' }} />
        </Grid>

        {/* About Seller Card */}
        <Grid item xs={12} sx={{ textAlign: { sm: 'center' } }}>
          <Typography variant="h5" gutterBottom>
            Sobre el vendedor
          </Typography>
          <Grid
            container
            sx={{
              marginTop: 4,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 2,
                bgcolor: 'background.paper',
                padding: 5,
                margin: { sm: '0 auto' },
              }}
            >
              <Avatar
                alt="Imagen del vendedor"
                src={userImage}
                sx={{
                  width: '110px', height: '110px', margin: 2, boxShadow: '0 0 5px 5px rgba(0, 0, 0, .2)',
                }}
              />

              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 24, marginRight: 1.5 }} component="span">
                  {vendedor.nombre}
                </Typography>
                <AiFillStar style={{ color: '#FFCD00', marginRight: '4px' }} />
                <Typography variant="body1" component="span">
                  4.8
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 400, fontSize: 18, marginTop: 1.5 }} component="span">
                {vendedor.descripcion}
              </Typography>

              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {'País: '}
                <Typography sx={{ fontWeight: 700, fontSize: 16 }} component="span">
                  {vendedor.paises}
                </Typography>
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Grid>
    </Paper>

  );
};

export default ServiceDetailsPage;
