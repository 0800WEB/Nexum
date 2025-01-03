import { Link } from 'react-scroll';
import React from 'react';

const Hero = () => {
  return (
    <header className="w-full xl:px-[120px] px-4 min-h-[90vh] flex items-center justify-center xl:justify-start" role="banner">
      <div className="hero-section xl:max-w-[735px] w-full max-w-[450px] flex flex-col gap-8 lg:p-0">

        {/* Informative Badge */}
        <div
          className="w-full sm:w-fit border border-black justify-center items-center gap-2.5 inline-flex px-8 py-2.5 rounded-full lg:max-h-[37px]"
          role="status"
          aria-label="Socios estratégicos de AMT España en Argentina"
        >
          <p className="font-medium text-sm sm:text-base">Socios estratégicos de AMT España en Argentina</p>
          <img
            className="max-h-4"
            src="/assets/amt-logo.webp"
            alt="Logo de AMT España"
            role="img"
          />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl text-center sm:text-left xl:text-6xl xl:leading-[4.5rem]">
          <strong>Impulsá</strong> tu empresa con estrategias de{' '}
          <strong className="bg-accent text-primary">comunicación efectivas</strong>
        </h1>

        {/* Supporting Text */}
        <p>
          Nos convertimos en parte de tu equipo para diseñar estrategias personalizadas
          que alcanzan tus objetivos y potencian tus ventas.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 font-medium">
          <Link
            smooth={true}
            duration={500}
            to="servicios"
            className="w-[168px] h-[51px] rounded-md border border-neutral-800 flex-col justify-center items-center inline-flex overflow-hidden"
            aria-label="Saber más sobre nuestros servicios"
            href="#servicios"
          >
            <div
              className="w-full h-full bg-neutral-800 shadow-inner shadow-white/25 justify-center items-center gap-2.5 inline-flex text-white"
              role="button"
            >
              Saber más
            </div>
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="proyectos"
            className="w-[205.33px] h-[51px] rounded-md border border-neutral-800/80 flex-col justify-center items-center inline-flex text-black/70"
            aria-label="Ver nuestros proyectos destacados"
            href="#proyectos"
          >
            Ver proyectos
          </Link>
        </div>
      </div>

      

    </header>
  );
};

export default Hero;
