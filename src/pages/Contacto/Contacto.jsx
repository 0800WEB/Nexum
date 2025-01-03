import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import React from 'react'
import CalEmbed from '@/components/Contact/CalEmbed'

const Contacto = () => {
  return (
    <div className='min-h-[90vh] spacing flex flex-col gap-12 lg:gap-24 items-center justify-center text-center'>
          <section className='max-w-[735px] flex flex-col gap-8'>
            <h3 className='h2-styled'>¿Querés desarrollar un proyecto? Demos vida a tu visión</h3> 
            </section>
            <CalEmbed />
            <section className='flex flex-col gap-4 items-center justify-center'>
                <div className="flex gap-4 justify-center items-center">
                    <MdOutlineMailOutline/>
                    <p>info@nexum.com.ar</p>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <MdOutlineWhatsapp/>
                    <p>+54 9 11 7127-2132</p>
                </div>
            </section>
    </div>
  )
}

export default Contacto