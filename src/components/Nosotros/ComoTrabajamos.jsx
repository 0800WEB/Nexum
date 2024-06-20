import React, { useState } from 'react';

const ComoTrabajamos = () => {
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });
  const [offset3, setOffset3] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;

    // Desplazamiento diferente para cada imagen
    setOffset1({
      x: (clientX / innerWidth) * 20 - 10,
      y: (clientY / innerHeight) * 20 - 10,
    });

    setOffset2({
      x: (clientX / innerWidth) * 40 - 20,
      y: (clientY / innerHeight) * 40 - 20,
    });

    setOffset3({
      x: (clientX / innerWidth) * 60 - 30,
      y: (clientY / innerHeight) * 60 - 30,
    });
  };

  return (
    <div 
      className="w-full px-[120px] py-[194px] justify-center items-center gap-[146px] inline-flex flex-col-reverse 2xl:flex-row overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="w-[734px] h-[633px] relative">
        <img
          className="w-[482px] h-[236px] left-0 top-[397px] absolute rounded-md"
          style={{ transform: `translate(${offset1.x}px, ${offset1.y}px)` }}
          src="assets/trabajamos-3.png"
          alt="trabajamos-3"
        />
        <img
          className="w-[482px] h-[236px] left-[252px] 2xl:left-[152px] top-[199px] absolute rounded-md"
          style={{ transform: `translate(${offset2.x}px, ${offset2.y}px)` }}
          src="assets/trabajamos-2.png"
          alt="trabajamos-2"
        />
        <img
          className="w-[483px] h-[262px] left-0 top-0 absolute rounded-md"
          style={{ transform: `translate(${offset3.x}px, ${offset3.y}px)` }}
          src="assets/trabajamos-1.png"
          alt="trabajamos-1"
        />
      </div>
      <div className="max-w-[608px] flex-col justify-center items-center 2xl:items-start gap-32 inline-flex 2xl:text-left text-center">
        <div className="text-white h2-styled">Como trabajamos</div>
        <div className="self-stretch text-white text-base font-normal ">
          En Nexum, combinamos metodologías ágiles con un enfoque creativo y tecnológico. Cada proyecto inicia con una fase de investigación profunda para entender las necesidades y objetivos del cliente. A partir de ahí, desarrollamos estrategias personalizadas que integran el diseño innovador con soluciones de inteligencia artificial, optimizando cada etapa del proceso.
          <br /><br />
          Creemos en la importancia de la colaboración y la comunicación continua. Nuestro equipo multidisciplinario trabaja en sinergia, aprovechando las fortalezas de cada miembro para superar desafíos y alcanzar resultados excepcionales. Este enfoque integral nos permite adaptarnos rápidamente a los cambios y mantenernos a la vanguardia en un entorno empresarial dinámico.
        </div>
      </div>
    </div>
  );
}

export default ComoTrabajamos;
