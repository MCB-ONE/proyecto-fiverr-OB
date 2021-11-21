import React from 'react';
/* import axios from 'axios'; */
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Avatar } from '@mui/material';
import { defaultServiceImg, defaultProfileImg } from '../../utils/helpers';

function ServiceCard({ service }) {
  // eslint-disable-next-line no-unused-expressions
  /* service.categoria ? console.log(service.categoria[0].nombre) : console.log(service.categorias[0].nombre); */
  let profileImg = '';
  // eslint-disable-next-line no-unused-expressions
  service.vendedores.length === 0 ? profileImg = '' : profileImg = service.vendedores[0].imagen;
    return (
      <article className="card card-info">
        <Link to={`service/${service.id}`}>
          <img className="card-img-top" src={service.imagen ? service.imagen : defaultServiceImg.src} alt="" />
        </Link>
        <div className="card-block">
          <figure className="profile">
            <Avatar alt="" src={profileImg === '' ? defaultProfileImg.src : profileImg} className="profile-avatar" />
            <div>
              <p className="profile-name h5">{service.nombre}</p>
              <p className="profile-country">{service.paises}</p>
            </div>
          </figure>
          <Link to={`service/${service.id}`} className="card-title">
            <Typography variant="h5">
              {service.descripcion}
            </Typography>
          </Link>
        </div>
        <div className="card-footer">
          <div className="reviews">
            <AiFillStar />
            <span>4,8</span>
          </div>
          <div className="price">
            <span>A PARTIR DE</span>
            <span>
              {service.precio}
              €
            </span>
          </div>
        </div>
      </article>
    );
}

export default ServiceCard;
