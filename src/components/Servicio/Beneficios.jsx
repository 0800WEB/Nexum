import React from 'react'

const Beneficios = () => {
    return (
        <div className="w-full min-h-[823px] flex-col justify-center items-center gap-8 inline-flex bg-secondary overflow-hidden spacing relative">
            <img className='absolute -left-28 h-full top-0' src="/assets/vector-transparent.png" alt="vector" />
            <div className='flex flex-col gap-8 text-center lg:text-left'>
                <p className="text-white">BRANDING</p>
                <p className="text-white text-[32px] font-bold">¿Cuáles son los beneficios?</p>
                <div className="justify-center items-baseline inline-flex flex-wrap gap-12">
                    <div className="min-h-[125px] max-w-[328px] flex-col justify-between lg:items-start inline-flex gap-4">
                        <div className="text-white/10 text-[96px] font-black">01</div>
                        <div className="text-white text-xl font-bold">Diferenciación y reconocimiento de marca</div>
                        <p className='text-white'>El branding te ayuda a crear una identidad única y mensajes que realmente conecten. Así, tu marca se vuelve inconfundible y los clientes siempre te recordarán.</p>
                    </div>
                    <div className="min-h-[125px] max-w-[328px] flex-col justify-between lg:items-start inline-flex gap-4">
                        <div className="text-white/10 text-[96px] font-black">02</div>
                        <div className="text-white text-xl font-bold">Credibilidad y confianza</div>
                        <p className='text-white'>El branding te ayuda a crear una identidad única y mensajes que realmente conecten. Así, tu marca se vuelve inconfundible y los clientes siempre te recordarán.</p>
                    </div>
                    <div className="min-h-[125px] max-w-[328px] flex-col justify-between lg:items-start inline-flex gap-4">
                        <div className="text-white/10 text-[96px] font-black">03</div>
                        <div className="text-white text-xl font-bold">Valor añadido y posibilidad de precio premium</div>
                        <p className='text-white'>El branding te ayuda a crear una identidad única y mensajes que realmente conecten. Así, tu marca se vuelve inconfundible y los clientes siempre te recordarán.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beneficios