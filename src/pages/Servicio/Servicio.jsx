import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Servicio = () => {
    let [ service, setService ] = useState({})
    let { servicio } = useParams()

    useEffect(()=>{
        axios.get(`/service/${servicio}.json`)
        .then(res=>{
            setService(res.data.service_detail)
        })
    }, [servicio])
    
    return (
        <div className='flex flex-col'>
            <div className='w-full min-h-[90vh] flex items-center justify-center lg:justify-between overflow-hidden relative'>
                <div className="w-[360px] h-[712px] relative -left-28 hidden lg:inline">
                    <img className="lg:w-[247px] xl:w-[301px] xl:h-[380px] sm:left-[81px] top-0 absolute rounded-2xl object-cover" src="/assets/service-grid-3.png" />
                    <img className="lg:w-[247px] xl:w-[301px] xl:h-[380px] sm:left-[133px] top-[208px] absolute rounded-2xl object-cover" src="/assets/service-grid-4.png" />
                    <img className="lg:w-[247px] xl:w-[301px] xl:h-[380px] sm:left-[64px] top-[424px] absolute rounded-2xl object-cover" src="/assets/service-grid-6.png" />
                </div>
                <div className="max-w-[734px] flex-col justify-start items-center gap-8 inline-flex">
                    <div className="self-stretch text-center text-neutral-800 text-[45px] font-bold ">{service?.hero_section?.title}</div>
                    <div className="self-stretch text-center text-neutral-800/opacity-80 text-base font-normal">{service?.hero_section?.subtitle}</div>
                </div>
                <div className="w-[331px] h-[712.66px] relative hidden lg:inline -right-12 top-8">
                    <img className="lg:w-[247px] xl:w-[301px] sm:right-[81px] lg:h-[288.66px] xl:h-[328.66px] left-[63px] top-[424px] absolute rounded-2xl" src="/assets/service-grid-2.png" />
                    <img className="lg:w-[247px] xl:w-[301px] sm:right-[133px] lg:h-[288.66px] xl:h-[328.66px] left-0 top-[196px] absolute rounded-2xl" src="/assets/service-grid-1.png" />
                    <img className="lg:w-[247px] xl:w-[301px] sm:right-[64px] lg:h-[288.66px] xl:h-[328.66px] left-[84px] top-0 absolute rounded-2xl" src="/assets/service-grid-5.png" />
                </div>
            </div>
            <div className="w-full min-h-[823px] flex-col justify-center items-center gap-8 inline-flex bg-secondary overflow-hidden spacing relative">
                <img className='absolute -left-28 h-full top-0' src="/assets/vector-transparent.png" alt="vector" />
                <div className='flex flex-col gap-8 text-center lg:text-left'>
                    <p className="text-white uppercase">{service?.name}</p>
                    <p className="text-white text-[32px] font-bold">¿Cuáles son los beneficios?</p>
                    <div className="justify-center items-baseline inline-flex flex-wrap gap-12">
                    {
                            service?.hero_section?.benefits.map(b=>(
                                <div className="min-h-[125px] max-w-[328px] flex-col justify-between lg:items-start inline-flex gap-4">
                            <div className="text-white/10 text-[96px] font-black">0{b.id}</div>
                            <div className="text-white text-xl font-bold">{b.title}</div>
                            <p className='text-white'>{b.description}</p>
                        </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[823px] spacing justify-center items-center inline-flex">
                <div className="self-stretch flex-col justify-center items-center gap-8 inline-flex">
                    <h4 className="h2-styled max-max-w-[733px] text-center">Innovación Estratégica y Ejecución Meticulosa</h4>
                    <div className="max-max-w-[734px] text-center text-neutral-800/opacity-80 text-base font-normal">Desde la concepción hasta la implementación, nuestro enfoque integral garantiza que cada detalle esté alineado y optimizado para el éxito.</div>
                </div>
            </div>
            {
                service.sections && service?.sections.map(section=>(
                <div className='spacing flex xl:justify-between xl:items-start flex-wrap gap-8 items-center justify-center'>
                    <div className="flex-col justify-center items-start gap-8 inline-flex ">
                        <div className="max-w-[733px] text-neutral-800 text-[45px] font-bold">{section?.title}</div>
                        <div className="max-w-[734px] text-neutral-800/opacity-80 text-base font-normal">{section?.description}</div>
                        <div className="flex-col justify-start items-start gap-4 flex">
                            {
                                section?.subsections && (
                                    section?.subsections.map(sub_section=>(
                                    <div className="px-4 py-1.5 rounded-[100px] border border-black/20 justify-center items-center gap-2.5 inline-flex">
                                        <div className="text-black text-base font-normal">{sub_section}</div>
                                    </div>
                                    ))
                                )
                            }
                        </div>
                    </div>
                    <img className="max-w-[608px] h-[544px] rounded-2xl w-full object-cover" src={`/assets/services/${section?.image}`} alt={section?.title}/>
                </div>
                ))
            }
        </div>
    )
}

export default Servicio