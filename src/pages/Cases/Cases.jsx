import React from 'react';
import { Helmet } from 'react-helmet';
import CasesCard from '../../components/Cases/CasesCard';

const Cases = () => {
  return (
    <div className='min-h-screen spacing flex flex-col gap-12 lg:gap-24 items-center text-center'>
      {/* Helmet para SEO */}
      <Helmet>
        <title>Casos de Éxito | Nexum</title>
        <meta
          name="description"
          content="Explora casos de éxito de pequeños, medianos y grandes clientes a quienes Nexum ha ayudado a alcanzar nuevos niveles en sus negocios."
        />
        <meta
          name="keywords"
          content="casos de éxito, marketing digital, optimización de negocios, re-styling, estrategia de marca"
        />
        <meta property="og:title" content="Casos de Éxito | Nexum" />
        <meta
          property="og:description"
          content="Descubre cómo hemos ayudado a nuestros clientes a destacar en sus industrias con estrategias innovadoras."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/cases/exar.webp" />
        <meta property="og:url" content="https://tu-dominio.com/casos-de-exito" />
      </Helmet>

      {/* Contenido Principal */}
      <section className='max-w-[735px] flex flex-col gap-8'>
        <h1 className='h2-styled'>Casos de Éxito</h1>
        <p>
          Descubre cómo hemos ayudado a pequeños, medianos y grandes clientes de todo el mundo a llevar sus negocios al siguiente nivel.
        </p>
      </section>
      <div className="wrapper-component flex gap-28 sm:gap-4 flex-wrap justify-center items-center">
        <CasesCard />
      </div>
    </div>
  );
};

export default Cases;
