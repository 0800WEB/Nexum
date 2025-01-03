import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import React from "react";
import { Helmet } from "react-helmet";
import CalEmbed from "@/components/Contact/CalEmbed";

const Contacto = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contacto | Nexum</title>
        <meta
          name="description"
          content="Contáctanos en Nexum para desarrollar tus proyectos. Estamos listos para ayudarte a llevar tu negocio al siguiente nivel. Escríbenos o agenda una reunión."
        />
        <meta
          name="keywords"
          content="contacto Nexum, comunicación, marketing digital, branding, Jujuy, estrategias de marca"
        />
        <meta
          property="og:title"
          content="Contacto | Nexum"
        />
        <meta
          property="og:description"
          content="En Nexum, estamos listos para ayudarte con tus proyectos de comunicación y marketing. Contáctanos para más información."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexum.net.ar/contacto" />
        <link rel="canonical" href="https://nexum.net.ar/contacto" />
      </Helmet>

      {/* Page Content */}
      <div className="min-h-[90vh] spacing flex flex-col gap-12 lg:gap-24 items-center justify-center text-center">
        {/* Hero Section */}
        <section
          className="max-w-[735px] flex flex-col gap-8"
          aria-labelledby="contact-heading"
        >
          <h1 id="contact-heading" className="h2-styled">
            ¿Querés desarrollar un proyecto? Demos vida a tu visión
          </h1>
          <p className="text-neutral-800">
            Escríbenos o agenda una reunión para empezar.
          </p>
        </section>

        {/* Calendar Embed */}
        <CalEmbed />

        {/* Contact Information */}
        <section
          className="flex flex-col gap-4 items-center justify-center"
          aria-labelledby="contact-info"
        >
          <h2 id="contact-info" className="sr-only">
            Información de Contacto
          </h2>

          {/* Email */}
          <div
            className="flex gap-4 justify-center items-center"
            aria-label="Correo Electrónico"
          >
            <MdOutlineMailOutline
              aria-hidden="true"
              className="text-primary text-2xl"
            />
            <a
              href="mailto:info@nexum.net.ar"
              className="text-neutral-800 underline hover:text-primary"
            >
              info@nexum.net.ar
            </a>
          </div>

          {/* WhatsApp */}
          <div
            className="flex gap-4 justify-center items-center"
            aria-label="Número de WhatsApp"
          >
            <MdOutlineWhatsapp
              aria-hidden="true"
              className="text-primary text-2xl"
            />
            <a
              href="https://wa.me/5491171272132"
              className="text-neutral-800 underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 11 7127-2132
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacto;
