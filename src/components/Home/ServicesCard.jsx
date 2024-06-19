import React from 'react'
import "./ServicesCard.scss"
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const ServicesCard = () => {
    const navigate = useNavigate()
    const handleDetail = (name) =>{
        navigate(`/servicios/${name}`)
    }
    return (
        <div className="max-w-[470px] lg:h-[358px] p-8 bg-neutral-800 rounded-md shadow border border-white/opacity-10 flex-col justify-between items-center inline-flex gap-4">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="w-[50px] h-[46px] p-4 rounded-md border border-white justify-center items-center gap-2.5 flex">
                    <img src="/assets/icons/comunicacion.png" alt="" />
                </div>
                <p className='text-white font-medium'>Comunicación Integral</p>
            </div>
            <div className="self-stretch text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Desarrollamos estrategias de comunicación globales que incluyen la  relación con los medios, la generación de pertenencia y la gestión de  crisis. Nuestro enfoque integral asegura una imagen pública coherente y  sólida, fortaleciendo la conexión de tu marca con su audiencia y  gestionando cualquier eventualidad con eficacia y profesionalismo.</div>
            <div className="self-stretch h-[0px] border border-white"></div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div onClick={()=>handleDetail(`branding`)} className="learn-more-btn text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal flex gap-4 items-center cursor-pointer">
                    <p>
                        Leer más
                    </p>
                    <FaArrowRight/>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard