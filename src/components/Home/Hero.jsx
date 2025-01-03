import { Link } from 'react-scroll';
import { IoIosStar } from "react-icons/io";
import React from 'react';

const Hero = () => {
  return (
    <header className="w-full xl:px-[120px] px-4 min-h-[90vh] flex items-center justify-center " role="banner">
      <div className="hero-section w-full max-w-[600px] flex flex-col justify-center items-center gap-4 lg:p-0 ">

        {/* Informative Badge */}
        <div
          className="w-full border border-black justify-center items-center gap-2.5 inline-flex px-8 py-2.5 rounded-full lg:max-h-[37px]"
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
        <div className="rounded-lg flex items-center gap-4">

      {/* Profile images stack */}
      <div className="flex -space-x-3">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            src={`/assets/clients/client-${i + 1}.avif`}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-black object-cover"
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <IoIosStar
              key={i}
              size={16}
              className="fill-secondary text-secondayfill-secondary"
            />
          ))}
        </div>

        {/* Text */}
        <div className="text-seconday fill-secondary font-medium">
          40+ Clientes felices
        </div>
      </div>
    </div>

        {/* Hero Title */}
        <h1 className="text-4xl text-center xl:text-5xl">
          <strong>Impulsá</strong> tu empresa con estrategias de{' '}
          <strong className="bg-accent text-primary">comunicación efectivas</strong>
        </h1>

        {/* Supporting Text */}
        <p className='text-center text-xl'>
          Nos convertimos en parte de tu equipo para diseñar estrategias personalizadas
          que alcanzan tus objetivos y potencian tus ventas.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 font-semibold w-full">
          <Link
            smooth={true}
            duration={500}
            to="servicios"
            className="h-[51px] rounded-full border border-neutral-800 flex-col justify-center items-center inline-flex overflow-hidden flex-1"
            aria-label="Saber más sobre nuestros servicios"
            href="#servicios"
          >
            <div
              className="w-full h-full bg-neutral-800 shadow-[inset_-1px_16px_36px_-15px_rgba(255,255,255,0.4)] s justify-center items-center gap-2.5 inline-flex text-white"
              role="button"
            >
              Saber más
            </div>
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="proyectos"
            className="h-[51px] rounded-full border border-neutral-800/80 flex-col justify-center items-center inline-flex text-black/70 flex-1"
            aria-label="Ver nuestros proyectos destacados"
            href="#proyectos"
          >
            Ver proyectos
          </Link>
        </div>
      </div>



      <div className="flex items-center justify-center absolute inset-0 flex-row flex-auto gap-0 overflow-hidden p-0 -z-10 grayscale hue-rotate-0 before:bg-secondary before:w-full before:h-screen " style={{
            mask: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)"
      }}>
        <div className="absolute inset-0 flex-auto z-1">
          <div className="absolute inset-0 h-full w-full opacity-100 rounded-inherit">
            <div className="absolute inset-0 rounded-inherit">
              <img
                src="/assets/background.avif"
                alt="Ilustración representando estrategias de comunicación"
                role="img"
                className="block w-full h-full rounded-inherit object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Hero;
