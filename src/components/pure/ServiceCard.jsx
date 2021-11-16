import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';

function ServiceCard({ service }) {
    // TODO Fake images change to our images from back
    const [userImage, setUserImage] = useState('');
    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            /* console.log(response.data.results[0].picture.medium); */
            setUserImage(response.data.results[0].picture.medium);
        })
        .catch((error) => {
            console.log(`Somethin went wrong: ${error}`);
        });
    }, []);
    return (
      <article className="card card-info">
        <img className="card-img-top" src="https://picsum.photos/200/150/?random" alt="" />
        <div className="card-block">
          <figure className="profile">
            <img src={userImage} className="profile-avatar" alt="" />
            <div>
              <p className="profile-name h5">{service.nombre}</p>
              <p className="profile-country">{service.paises}</p>
            </div>
          </figure>
          <div className="card-title">
            {service.descripcion}
          </div>
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
