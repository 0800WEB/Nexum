import React, { useState } from 'react';

const NuestroEnfoque = () => {
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;

    // Desplazamiento diferente para cada imagen
    setOffset1({
      x: (clientX / innerWidth) * 30 - 15,
      y: (clientY / innerHeight) * 30 - 15,
    });

    setOffset2({
      x: (clientX / innerWidth) * 60 - 30,
      y: (clientY / innerHeight) * 60 - 30,
    });
  };

  return (
    <div 
      className="w-full spacing justify-center items-center xl:justify-between gap-8 inline-flex flex-col xl:flex-row overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[608px] flex-col justify-center xl:items-start gap-32 inline-flex text-center xl:text-left">
        <div className="text-white h2-styled">Nuestro enfoque</div>
        <div className="self-stretch text-white text-base font-normal">
          Nos enfocamos en la comunicación integral siempre teniendo en cuenta que las empresas con las que trabajemos se involucren social, cultural y ambientalmente. Muchos de los proyectos que llevamos a cabo son reconocidos en nuestra provincia y en todo el país.
          <br /><br />
          Trabajamos mano a mano con nuestros clientes para asegurar que sus valores y objetivos se reflejen en cada campaña. Nos enorgullece nuestra capacidad para crear estrategias de comunicación que no solo impacten positivamente a las marcas, sino que también contribuyan al bienestar de nuestra comunidad. A través de una colaboración constante y un compromiso con la excelencia, hemos logrado posicionarnos como líderes en el sector.
          <br /><br />
          Nuestro enfoque incluye una dedicación especial a la sostenibilidad, asegurando que cada proyecto tenga un impacto mínimo en el medio ambiente. Creemos que el éxito empresarial debe ir de la mano con la responsabilidad social, y por eso, promovemos prácticas que beneficien a la sociedad en general. Desde campañas de concienciación hasta iniciativas ecológicas, cada esfuerzo está dirigido a crear un futuro más prometedor para todos.
        </div>
      </div>
      <div className="w-[734px] h-[538px] relative">
        <img
          className="w-[482px] left-[252px] top-[120px] absolute rounded-md"
          style={{ transform: `translate(${offset1.x}px, ${offset1.y}px)` }}
          src="/assets/enfoque-2.webp"
          alt="enfoque-2"
        />
        <img
          className="w-[483px] left-0 top-0 absolute rounded-md"
          style={{ transform: `translate(${offset2.x}px, ${offset2.y}px)` }}
          src="/assets/enfoque-1.webp"
          alt="enfoque-1"
        />
      </div>
    </div>
  );
}

export default NuestroEnfoque;
