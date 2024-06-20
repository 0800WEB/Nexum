import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import React from 'react'

const Contacto = () => {
  return (
    <div className='min-h-screen spacing flex flex-col gap-12 lg:gap-24 items-center text-center'>
          <section className='max-w-[735px] flex flex-col gap-8'>
            <h3 className='h2-styled'>Hablemos</h3> 
            <p>¿Querés desarrollar un proyecto? Demos vida a tu visión</p>
            </section>
            <section className='flex flex-col gap-4 items-center justify-center'>
                <div className="flex gap-4 justify-center items-center">
                    <MdOutlineMailOutline/>
                    <p>info@nexum.com.ar</p>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <MdOutlineWhatsapp/>
                    <p>+54 9 388 479-9572</p>
                </div>
            </section>
    </div>
  )
}

export default Contacto