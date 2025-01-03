import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch services.json dynamically
    fetch('/services.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        return response.json();
      })
      .then((data) => setServices(data.services))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="error-message">
        <p>Hubo un error al cargar los servicios: {error}</p>
      </div>
    );
  }

  return (
    <div id="servicios" className="min-h-screen spacing flex flex-col gap-12 lg:gap-24">
      <section className="max-w-[735px] flex flex-col gap-8">
        <h3 className="h2-styled" aria-level="2">Así te ayudamos a alcanzar tus objetivos</h3>
        <p>
          En <strong>Nexum</strong>, ofrecemos una gama completa de servicios de comunicación diseñados para{' '}
          <strong>impulsar tu marca</strong> y <strong>conectar con su audiencia</strong>.
        </p>
      </section>
      <div className="flex flex-wrap gap-5 justify-center">
        {services.length > 0 ? (
          services.map((service) => <ServicesCard service={service} key={service.id} />)
        ) : (
          <p>Cargando servicios...</p>
        )}
      </div>
    </div>
  );
};

export default Services;
