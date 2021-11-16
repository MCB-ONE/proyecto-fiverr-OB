import React from 'react';
import ServicesList from '../components/pure/ServicesList';

const ServicesPage = () => {
    return (
      <div className="page-content container">
        {/* TODO breadcumbs */}
        <h1>Servicios </h1>
        <p>Encuentra el freelancer adecuado para que comience a trabajar en tu proyecto en cuestión de minutos.</p>
        <ServicesList />
      </div>
    );
};

export default ServicesPage;
