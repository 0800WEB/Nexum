import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { scroller } from 'react-scroll'

const Footer = () => {
    let navigate = useNavigate()
    let location = useLocation()
    const handleScrollLinkClick = (to) => {
        if (location.pathname !== '/') {
          navigate('/', { state: { scrollTo: to } });
        } else {
          scroller.scrollTo(to, { smooth: true });
        }
      };
    return (
        <div className="w-full min-h-[684px] bg-secondary justify-between items-center inline-flex flex-wrap spacing">
            <div className="self-stretch p-2.5 flex-col justify-between items-start inline-flex">
                <div className="flex-col justify-center items-start gap-8 flex">
                    <div className="w-[165px] h-[50px] relative">
                        <img className="w-[164px] h-[29px] left-0 top-[10px] absolute object-contain object-left" src="/logo-white.png" />
                    </div>
                    <div className="text-center text-white text-base font-normal  leading-normal">España & Argentina</div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[15px] h-[15px] relative" />
                        <div className="w-3.5 h-[15px] relative" />
                        <div className="w-[15px] h-[15px] relative" />
                    </div>
                </div>
                <div className="opacity-60 text-center text-white/opacity-60 text-base font-normal  leading-normal text-white">© 2024 Nexum. Todos los derechos reservados</div>
            </div>
            <div className="self-stretch p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-center text-white text-base font-bold  leading-normal">Agencia</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <button onClick={() => handleScrollLinkClick('servicios')} className="opacity-70 text-center text-white text-base font-normal  leading-normal">Servicios</button>
                    <Link to={`/casos-de-exito`} className="opacity-70 text-center text-white text-base font-normal  leading-normal">Casos de exito</Link>
                    <Link to={`/contacto`} className="opacity-70 text-center text-white text-base font-normal  leading-normal">Contacto</Link>
                </div>
            </div>
            <div className="self-stretch p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-center text-white text-base font-bold  leading-normal">Servicios</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <Link to={`/servicios/comunicacion`} className="opacity-70 text-center text-white text-base font-normal  leading-normal">Comunicación Integral</Link>
                    <Link to={`/servicios/branding`} className="opacity-70 text-center text-white text-base font-normal  leading-normal">Branding</Link>
                    <Link to={`/servicios/diseñoweb`} className="opacity-70 text-center text-white text-base font-normal  leading-normal">Diseño Web UX UI</Link>
                    <Link to={`/servicios/seo`} className="opacity-70 text-center text-white text-base font-normal  leading-normal">SEO</Link>
                    <Link to={`/servicios/ia`} className="opacity-70 text-center text-white text-base font-normal  leading-normal">Inteligencia Artificial</Link>
                    <Link to={`/servicios/publicidad`} className="opacity-70 text-center text-white text-base font-normal  leading-normal">Publicidad</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer