import React from 'react'
import CaseCard from './CaseCard'

const Cases = () => {
  return (
    <div id='proyectos' className='min-h-screen w-full spacing flex flex-col items-center'>
        <section className='flex flex-col gap-8 max-w-[983px]'>
            <h3 className='h2-styled text-center'>Contamos tu historia, conectamos con tu audiencia.</h3>
            <p className='text-center'>
            En <strong>Nexum</strong>, creemos que cada marca tiene una historia única que merece ser contada. Nos especializamos en dar vida a esas historias a través de estrategias de comunicación creativas y personalizadas. Chusmeate nuestros casos de estudio.
            </p>
        </section>
        <div className="cases-wrapper flex justify-center items-center gap-5 mt-32 flex-wrap">
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
        </div>
    </div>
  )
}

export default Cases