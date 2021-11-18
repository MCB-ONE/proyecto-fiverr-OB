import React, { useEffect, useState } from 'react';
// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllServices, setServices } from '../../store/slices/services';
// Filter helper import
import filterServices from '../../utils/filterServices';
// Styles import
import '../../styles/css/gallery.scss';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  // We have to extract data from the Redux store states.
  const { serviceList: services } = useSelector((state) => state.services);
  const filters = useSelector((state) => state.filters);
  // Services list state
  const [servicesList, setServicesList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Important: We have to dispatch the fetch api function to set initial services
    dispatch(fetchAllServices());
    setServices(services);
    console.log(filters);
  }, [dispatch]);

  useEffect(() => {
    setServicesList(services);
  }, [services]);

  // Use Effect to filter services
  useEffect(() => {
    const filteredServices = filterServices(services, filters);
    setServicesList(filteredServices);
    console.log(filteredServices);
  }, [filters]);

  return (
    <div className="gallery">
      {servicesList.map((service) => {
        return (
          <ServiceCard
            key={service.id}
            service={service}
          />
        );
      })}
    </div>
  );
};

export default ServicesList;
