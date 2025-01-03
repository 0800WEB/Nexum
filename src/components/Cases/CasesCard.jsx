import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const CasesCard = () => {
  return (
    <article className='min-w-[333.333px] max-w-[483px] max-h-[390px] bg-white relative flex-shrink cursor-pointer flex-1'>
      {/* Enlace a la página del caso */}
      <Link to="/casos-de-exito/exar" aria-label="Ver caso de éxito Exar">
        {/* Imagen del caso */}
        <img
          className="object-cover w-full h-full"
          src="/assets/cases/exar.webp"
          alt="Exar, multinacional de litio"
        />
        {/* Título del caso */}
        <h2 className='h6-styled text-white text-center left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2 max-w-[408px]'>
          Re-styling de Exar, la multinacional de litio
        </h2>
        {/* Botón de acción */}
        <div
          className="w-[127.87px] h-10 px-7 py-3.5 bg-white flex items-center gap-4 font-bold absolute bottom-0 left-0"
          aria-label="Ver más sobre Exar"
        >
          <FaArrowRight />
          <p>EXAR</p>
        </div>
      </Link>
    </article>
  );
};

export default CasesCard;
