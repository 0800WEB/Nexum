import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="w-full min-h-[684px] bg-neutral-800 justify-between items-center inline-flex flex-wrap spacing">
            <div className="self-stretch p-2.5 flex-col justify-between items-start inline-flex">
                <div className="flex-col justify-center items-start gap-8 flex">
                    <div className="w-[165px] h-[50px] relative">
                        <img className="w-[164px] h-[29px] left-0 top-[10px] absolute object-contain object-left" src="/logo-white.png" />
                    </div>
                    <div className="text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">España & Argentina</div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[15px] h-[15px] relative" />
                        <div className="w-3.5 h-[15px] relative" />
                        <div className="w-[15px] h-[15px] relative" />
                    </div>
                </div>
                <div className="opacity-60 text-center text-white/opacity-60 text-base font-normal font-['Helvetica Neue LT Std'] leading-normal text-white">© 2024 Nexum. Todos los derechos reservados</div>
            </div>
            <div className="self-stretch p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-center text-white text-base font-bold font-['Helvetica Neue LT Std'] leading-normal">Agencia</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <Link to={`/servicios`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Servicios</Link>
                    <Link to={`/casos-de-exito`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Casos de exito</Link>
                    <Link to={`/contacto`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Contacto</Link>
                </div>
            </div>
            <div className="self-stretch p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-center text-white text-base font-bold font-['Helvetica Neue LT Std'] leading-normal">Servicios</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <Link to={`/servicios/comunicacion`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Comunicación Integral</Link>
                    <Link to={`/servicios/branding`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Branding</Link>
                    <Link to={`/servicios/diseñoweb`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Diseño Web UX UI</Link>
                    <Link to={`/servicios/seo`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">SEO</Link>
                    <Link to={`/servicios/ia`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Inteligencia Artificial</Link>
                    <Link to={`/servicios/publicidad`} className="opacity-70 text-center text-white text-base font-normal font-['Helvetica Neue LT Std'] leading-normal">Publicidad</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer