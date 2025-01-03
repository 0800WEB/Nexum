import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Origin from '@/components/Home/Origin';
import Cases from '@/components/Home/Cases';
import Trusted from '@/components/Home/Trusted';
import Contact from '@/components/Home/Contact';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Nexum | Estrategias de Comunicación Efectivas</title>
        <meta
          name="description"
          content="Descubre cómo Nexum ayuda a empresas a alcanzar sus objetivos con estrategias personalizadas de comunicación, branding, marketing digital y más. Desde Jujuy para el mundo."
        />
        <meta name="keywords" content="comunicación, branding, marketing digital, SEO, Jujuy, estrategias de marca" />
        <meta property="og:title" content="Nexum | Estrategias de Comunicación Efectivas" />
        <meta
          property="og:description"
          content="Desde Jujuy para el mundo, Nexum ofrece soluciones personalizadas en branding, marketing digital y comunicación."
        />
        <meta property="og:image" content="/assets/hero-image.webp" />
        <meta property="og:type" content="website" />
        <link rel="preload" as="image" href="/assets/hero-image.webp" />
      </Helmet>

      {/* Secciones del Home */}
      <Hero />
      <main>
        <section>
          <Services />
        </section>
        <section>
          <Origin />
        </section>
        <section>
          <Cases />
        </section>
        <section>
          <Trusted />
        </section>
      </main>
      <footer>
        <Contact />
      </footer>
    </HelmetProvider>
  );
};

export default Home;
