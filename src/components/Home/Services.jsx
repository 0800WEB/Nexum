import React from 'react'
import ServicesCard from './ServicesCard'
import servicesJson from '../../../public/services.json'
const Services = () => {
  let {services} = servicesJson
  return (
    <div id='servicios' className='min-h-screen spacing flex flex-col gap-12 lg:gap-24'>
        <section className='max-w-[735px] flex flex-col gap-8'>
            <h3 className='h2-styled'>Asi te ayudamos a alcanzar tus objetivos</h3>
            <p>En <strong>Nexum</strong>, ofrecemos una gama completa de servicios de comunicación diseñados para <strong>impulsar tu marca</strong> y <strong>conectar con su audiencia</strong>.</p>
        </section>
        <div className='flex flex-wrap gap-5 justify-center'>
          {
            services.map(service=>(
              <ServicesCard service={service} key={service.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Services