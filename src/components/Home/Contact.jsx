import React from 'react'

const Contact = () => {
  return (
    <div className='lg:py-32 lg:px-[120px] px-4 py-12'>
        <div className="flex gap-28 justify-center items-center flex-wrap">
            <img className='hidden md:inline' src="/assets/contact.png" alt="contact" />
            <form className='max-w-[686px] w-full'>
                <legend className='h2-styled'>Contacta con nosotros</legend>
                <p className='mt-8'>Entendemos la importancia de las relaciones, por eso es nuestra prioridad ayudarte</p>
                <fieldset className='mt-16 flex flex-col gap-8 max-w-full'>
                    <fieldset className='w-full flex gap-4 flex-col md:flex-row'>
                        <label htmlFor="" className='h-[70px] flex flex-col justify-between flex-grow'>
                        Nombre
                        <input className='bg-inherit border-b-2 border-secondary focus-visible:outline-none flex-grow' type="text" />
                        </label>
                        <label htmlFor="" className='h-[70px] flex flex-col justify-between flex-grow'>
                        Email
                        <input className='bg-inherit border-b-2 border-secondary focus-visible:outline-none flex-grow' type="text" />
                        </label>
                    </fieldset>
                    <fieldset className='w-full'>
                    <label htmlFor="" className='h-[70px] flex flex-col justify-between flex-grow'>
                        Asunto
                        <input className='bg-inherit border-b-2 border-secondary focus-visible:outline-none flex-grow' type="text" />
                        </label>
                    </fieldset>
                    <fieldset className='w-full'>
                    <label htmlFor="" className='min-h-[70px] flex flex-col justify-between flex-grow'>
                        Mensaje
                        <textarea className='bg-inherit outline-none focus-visible:outline-none border-b-2 border-secondary w-full' name="textarea" rows="8" cols="50">
                        </textarea>
                        </label>
                    </fieldset>
                    <button type='submit' className="w-[195px] h-[51px] rounded-md border border-neutral-800 flex-col justify-center items-center inline-flex overflow-hidden">
                        <div className="w-full h-full bg-neutral-800 shadow-inner shadow-white/25 justify-center items-center gap-2.5 inline-flex text-white">
                            Enviar
                        </div>
                    </button>
                </fieldset>
            </form>
        </div>
    </div>
  )
}

export default Contact