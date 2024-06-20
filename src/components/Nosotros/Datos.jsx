import React from 'react'

const Datos = () => {
  return (
<div className="w-[986px] min-h-44 flex-col justify-start items-center gap-8 inline-flex">
    <div className="self-stretch justify-center items-center inline-flex flex-wrap gap-12">
        <div className="h-[125px] flex-col justify-between items-start inline-flex">
            <div className="text-center text-white text-5xl font-black">14</div>
            <hr className='h-1 bg-white w-full'/>
            <div className="text-center text-white text-2xl font-light">AÑOS DE TRAYECTORIA</div>
        </div>
        <div className="h-[125px] flex-col justify-between items-start inline-flex">
            <div className="text-center text-white text-5xl font-black">138</div>
            <hr className='h-1 bg-white w-full'/>
            <div className="text-center text-white text-2xl font-light">PROYECTOS CONCLUIDOS</div>
        </div>
        <div className="h-[125px] flex-col justify-between items-start inline-flex">
            <div className="text-center text-white text-5xl font-black">+40</div>
            <hr className='h-1 bg-white w-full'/>
            <div className="text-center text-white text-2xl font-light">CLIENTES SATISFECHOS</div>
        </div>
    </div>
    <div className="text-center text-white text-base font-normal">Nuestra experiencia habla por nosotros</div>
</div>
  )
}

export default Datos