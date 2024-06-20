import React from 'react'
import { useParams } from 'react-router-dom'

const Servicio = () => {
    let { servicio } = useParams()
    
  return (
    <div className='w-full spacing min-h-[90vh] flex items-center justify-center xl:justify-start overflow-hidden relative'>
<div className="w-[360px] h-[712px] absolute -left-64 hidden lg:inline">
    <img className="lg:w-[247px] xl:w-[301px] xl:h-[380px] sm:left-[81px] top-0 absolute rounded-2xl" src="https://via.placeholder.com/247x288" />
    <img className="lg:w-[247px] xl:w-[301px] xl:h-[380px] sm:left-[133px] top-[208px] absolute rounded-2xl" src="https://via.placeholder.com/247x288" />
    <img className="lg:w-[247px] xl:w-[301px] xl:h-[380px] sm:left-[64px] top-[424px] absolute rounded-2xl" src="https://via.placeholder.com/247x288" />
</div>
<div className="w-[734px] flex-col justify-start items-center gap-8 inline-flex">
    <div className="self-stretch text-center text-neutral-800 text-[45px] font-bold ">Construimos Identidades Poderosas</div>
    <div className="self-stretch text-center text-neutral-800/opacity-80 text-base font-normal ">Ofrecemos servicios completos para impulsar tu marca: creación de nombres, diseño de logotipos, consultorías en branding, arquitectura de marcas, renovación de identidad y desarrollo de brandbooks. Todo en un solo lugar.</div>
</div>
<div className="w-[331px] h-[712.66px] relative hidden lg:inline">
    <img className="lg:w-[247px] xl:w-[301px] sm:right-[81px] lg:h-[288.66px] xl:h-[328.66px] left-[63px] top-[424px] absolute rounded-2xl" src="https://via.placeholder.com/247x289" />
    <img className="lg:w-[247px] xl:w-[301px] sm:right-[133px] lg:h-[288.66px] xl:h-[328.66px] left-0 top-[196px] absolute rounded-2xl" src="https://via.placeholder.com/247x289" />
    <img className="lg:w-[247px] xl:w-[301px] sm:right-[64px] lg:h-[288.66px] xl:h-[328.66px] left-[84px] top-0 absolute rounded-2xl" src="https://via.placeholder.com/247x289" />
</div>
    </div>
  )
}

export default Servicio