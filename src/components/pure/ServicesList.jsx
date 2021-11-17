import React, { useEffect } from 'react';
// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllServices } from '../../store/slices/services';
// Styles import
import '../../styles/css/gallery.scss';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  // We have to extract data from the Redux store state.
  const { serviceList: services } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  useEffect(() => {
    // Important: We have to dispatch the fetch api function
    dispatch(fetchAllServices());
  }, [dispatch]);
  console.log(services);
    return (
      <div className="gallery">
        {services.map((service) => {
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
