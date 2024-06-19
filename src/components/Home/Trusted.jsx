import React from 'react';
import './Trusted.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trusted = () => {
  const clients = [
    { name: 'Bellomo', image: "belomo.png" },
    { name: 'Che Revista', image: "che.png" },
    { name: 'Exar', image: "exar.png" },
    { name: 'Finca Machuca', image: "finca.png" },
    { name: 'Geco Constructora', image: "geco.png" },
    { name: 'Get - Servicios Industriales', image: "get.png" },
    // Agrega más clientes aquí si es necesario
    { name: 'Bellomo', image: "belomo.png" },
    { name: 'Che Revista', image: "che.png" },
    { name: 'Exar', image: "exar.png" },
    { name: 'Finca Machuca', image: "finca.png" },
    { name: 'Geco Constructora', image: "geco.png" },
    { name: 'Get - Servicios Industriales', image: "get.png" },
    { name: 'Bellomo', image: "belomo.png" },
    { name: 'Che Revista', image: "che.png" },
    { name: 'Exar', image: "exar.png" },
    { name: 'Finca Machuca', image: "finca.png" },
    { name: 'Geco Constructora', image: "geco.png" },
    { name: 'Get - Servicios Industriales', image: "get.png" },
  ];

  const settings = {
    dots: true,
    infinite: false, // Temporalmente cambiar a false para depurar
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    customPaging: i => (
      <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100"></div>
    ),
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
      </div>
    )
  };
  

  const itemsPerSlide = 6; // 3 columnas x 2 filas
  const slides = [];
  for (let i = 0; i < clients.length; i += itemsPerSlide) {
    slides.push(clients.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="min-h-[485px] bg-secondary flex flex-col gap-8 spacing justify-center">
      <section className="flex flex-col justify-center items-center mb-8 gap-8">
        <h3 className="h2-styled text-white">La confianza lo es todo</h3>
        <p className="text-white/50">Algunas de las empresas que confiaron en nosotros</p>
      </section>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full">
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              {slide.map((client, idx) => (
                <div key={idx} className="flex justify-center items-center cursor-grabbing" >
                  <img src={`/assets/clients/${client.image}`} alt={client.name} className="max-h-40"/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trusted;
