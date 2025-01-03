import React from 'react';
import { Helmet } from 'react-helmet';

const Case = () => {
  // Datos de ejemplo, puedes reemplazar estos con datos reales o dinámicos en el futuro
  const caseData = {
    title: 'Exar',
    year: '2023',
    tags: [
      'Identidad Visual',
      'Estrategia de Marca',
      'Creación de Contenido',
      'Experiencia de Usuario',
      'Desarrollo Web',
      'Presentación Corporativa',
    ],
    description: `Figma ipsum component variant main layer. Plugin ellipse resizing comment text opacity team. Bullet community pen library community project figjam comment editor selection. Shadow figjam bullet draft library arrange style layout. Strikethrough slice stroke ellipse flows. Asset component shadow stroke community. Content slice scrolling flows rotate figjam. Bullet subtract bold outline object stroke style. Team polygon export ellipse connection arrange figjam. Arrow comment slice prototype ipsum scrolling selection scrolling vector link.`,
    images: [
      '/assets/cases/exar/1.webp',
      '/assets/cases/exar/2.webp',
      '/assets/cases/exar/3.webp',
    ],
  };

  return (
    <>
      <Helmet>
        {/* SEO dinámico basado en los datos del caso */}
        <title>{caseData.title} | Caso de Éxito | Nexum</title>
        <meta
          name="description"
          content={`Conoce cómo Nexum ayudó a ${caseData.title} a alcanzar el éxito con soluciones de ${caseData.tags.join(
            ', '
          )}.`}
        />
        <meta name="keywords" content={caseData.tags.join(', ')} />
        <meta property="og:title" content={`${caseData.title} | Caso de Éxito`} />
        <meta
          property="og:description"
          content={`Descubre el trabajo realizado para ${caseData.title} y los resultados obtenidos.`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={caseData.images[0]} />
      </Helmet>

      <div className="bkg bg-primary h-[60vh] sm:h-[40vh]"></div>
      <div className="min-h-screen spacing flex flex-col gap-12 lg:gap-24 bg-secondary">
        <section className="wrapper -translate-y-[35rem] sm:-translate-y-96">
          {/* Información principal del caso */}
          <header className="min-h-[110.62px] flex-col justify-start items-start gap-4">
            <h1 className="h2-styled">{caseData.title}</h1>
            <div className="tags justify-start items-start flex gap-4 flex-wrap">
              {caseData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag px-4 py-1.5 rounded-[100px] border border-black/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <time
              className="text-neutral-800/opacity-80 text-base font-normal"
              dateTime={caseData.year}
            >
              {caseData.year}
            </time>
          </header>

          {/* Galería de imágenes */}
          <div className="image-wrapper flex flex-wrap gap-4 justify-center items-center mt-8">
            {caseData.images.map((image, index) => (
              <img
                key={index}
                className="flex-shrink flex-grow"
                src={image}
                alt={`Imagen ${index + 1} del caso ${caseData.title}`}
              />
            ))}
          </div>

          {/* Descripción del caso */}
          <article className="case-description text-white/80 text-base font-normal mt-12">
            <h2 className="h2-styled text-white my-[80px]">
              Re-styling de {caseData.title}, la multinacional de litio
            </h2>
            <p>{caseData.description}</p>
          </article>
        </section>
      </div>
    </>
  );
};

export default Case;
