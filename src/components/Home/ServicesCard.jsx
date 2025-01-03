import React from 'react'
import "./ServicesCard.scss"
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const navigate = useNavigate()
    const handleDetail = (name) =>{
        navigate(`/servicios/${name}`)
    }
    return (
        <div className="max-w-[470px] lg:h-[358px] p-8 bg-neutral-800 rounded-2xl shadow border border-white/opacity-10 flex-col justify-between items-center inline-flex gap-4">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="w-[50px] h-[46px] p-4 rounded-md border border-white justify-center items-center gap-2.5 flex">
                    <img src={`/assets/icons/${service.icon}`} alt={service.name} role="img" />
                </div>
                <p className='text-white font-medium'>{service.name}</p>
            </div>
            <div className="self-stretch text-white text-base font-normal  leading-normal">{service.description}</div>
            <div className="self-stretch h-[0px] border border-white"></div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div onClick={()=>handleDetail(`${service.href}`)} className="learn-more-btn text-white text-base font-normal  leading-normal flex gap-4 items-center cursor-pointer">
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