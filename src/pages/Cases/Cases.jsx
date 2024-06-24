import React from 'react'
import CasesCard from '../../components/Cases/CasesCard'

const Cases = () => {
  return (
    <div className='min-h-screen spacing flex flex-col gap-12 lg:gap-24 items-center text-center'>
         <section className='max-w-[735px] flex flex-col gap-8'>
            <h3 className='h2-styled'>Casos de éxito</h3>
            <p>Descubre cómo hemos ayudado a pequeños, medianos y grandes clientes de todo el mundo a llevar sus negocios al siguiente nivel.</p>
        </section>
        <div className="wrapper-component flex gap-28 sm:gap-4 flex-wrap justify-center items-center">
        <CasesCard/>
        </div>
    </div>
  )
}

export default Cases