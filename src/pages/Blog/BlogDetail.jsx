import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const BlogDetail = () => {
  return (
    <div className='min-h-screen items-center spacing flex flex-col gap-[64px]'>
         <div className='flex gap-4 items-center font-medium text-secondary self-start'>
            <p>BLOG</p>
            <IoIosArrowBack/>
            <p>EXAR</p>
         </div>
         <img className="max-w-[1488px] max-h-[653px] w-full rounded-md object-cover " src="/assets/enfoque-1.png" />
         <div className='flex flex-col 2xl:flex-row 2xl:gap-8 w-full max-w-[1488px] 2xl:justify-between'>
            <div className="w-full md:max-w-[366px] h-28 relative flex-shrink-0">
                    <img className="w-[106px] h-28 left-0 top-0 absolute rounded-md object-cover" src="https://statics.somosjujuy.com.ar/2020/02/crop/6341e2b364a28__400x300.webp" />
                    <div className="w-[223px] left-[143px] top-[48px] absolute text-neutral-800/opacity-80 text-base font-normal font-['Helvetica Neue LT Std']">Lic. en Comunicación. Periodismo tradicional y digital</div>
                    <div className="left-[143px] top-0 absolute text-black text-[32px] font-medium font-['Helvetica Neue LT Std']">Elisabeth Amat</div>
            </div>
            <div className="max-w-[985px] flex-col justify-start items-start gap-16 inline-flex 2xl:py-0 py-[64px]">
                <h2 className='h2-styled'>De esta manera logramos publicidad efectiva en nuestros clientes</h2>
                <div className="text-neutral-800/opacity-80 text-base font-normal font-['Helvetica Neue LT Std']">En un mundo saturado de mensajes publicitarios, destacarse y conectar con los clientes potenciales puede ser un desafío. Sin embargo, con una estrategia bien definida y una ejecución impecable, es posible crear campañas publicitarias efectivas que generen resultados tangibles para tu negocio.

<br />En este artículo, compartiremos algunos de los principios clave que seguimos en <strong>Nexum</strong> para lograr publicidad efectiva para nuestros clientes: <br />

1. Conocer a fondo a tu público objetivo
<br />
El primer paso fundamental para cualquier campaña publicitaria exitosa es comprender a tu público objetivo. Esto implica conocer sus necesidades, intereses, comportamientos y hábitos de consumo. Cuanto más sepas sobre tu audiencia, mejor podrás adaptar tus mensajes y elegir los canales adecuados para llegar a ellos.
<br />
2. Definir objetivos claros y medibles
<br />
¿Qué quieres lograr con tu campaña publicitaria? Es importante establecer objetivos claros y medibles desde el principio. Esto te ayudará a determinar el éxito de tu campaña y a realizar los ajustes necesarios en el camino.
<br />
3. Elegir los canales adecuados
<br />
Existen diversos canales publicitarios disponibles, desde la publicidad tradicional hasta el marketing digital. El éxito de tu campaña dependerá en gran medida de elegir los canales adecuados para llegar a tu público objetivo.
<br />
4. Crear contenido atractivo y relevante
<br />
Tu contenido publicitario debe ser atractivo, relevante para tu público objetivo y transmitir un mensaje claro y convincente. Utiliza un lenguaje sencillo, imágenes impactantes y una llamada a la acción clara para impulsar la interacción.
<br />
5. Monitorear y medir los resultados
<br />
Es fundamental realizar un seguimiento del rendimiento de tu campaña publicitaria y medir los resultados. Esto te permitirá identificar qué funciona y qué no, y realizar los ajustes necesarios para optimizar tu estrategia.
<br />
6. Adaptarse y evolucionar
<br />
El panorama del marketing está en constante cambio, por lo que es importante estar a la vanguardia de las últimas tendencias y adaptar tus estrategias publicitarias en consecuencia.
<br />
7. Trabajar con un equipo de expertos
<br />
</div>
                <img className="object-cover self-stretch max-h-[480px] rounded-md" src="/assets/blog-1.jpg" />
                <div className="text-neutral-800/opacity-80 text-base font-normal font-['Helvetica Neue LT Std']">Si no tienes el tiempo o los recursos para gestionar tu propia campaña publicitaria, puedes considerar trabajar con un equipo de expertos en marketing y publicidad. Un equipo experimentado puede ayudarte a desarrollar una estrategia efectiva y ejecutarla con éxito.
<br />
En <strong>Nexum</strong>, estamos comprometidos a ayudar a nuestros clientes a lograr publicidad efectiva. Contamos con un equipo de profesionales experimentados que se dedican a crear campañas personalizadas que generen resultados.
<br />
Si estás buscando mejorar tus resultados publicitarios, contáctanos hoy mismo para saber cómo podemos ayudarte.
<br />
Recuerda: La publicidad efectiva no es una fórmula mágica, sino el resultado de una estrategia bien definida, una ejecución impecable y una medición constante de los resultados. <br />Al seguir estos principios clave, puedes aumentar tus posibilidades de crear campañas publicitarias exitosas que impulsen tu negocio.</div>
            </div>
         </div>
    </div>
  )
}

export default BlogDetail