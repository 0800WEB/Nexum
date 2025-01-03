import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_w3pg0zl', 'template_ihyc83m', formData, 'Sy0Qgkjp-mjYpa1YZ')
      .then((response) => {
        toast.success('Correo enviado correctamente');
      })
      .catch((error) => {
        console.log(error)
        toast.error('Error al enviar el correo');
      });
  };

  return (
    <div className='lg:py-32 lg:px-[120px] px-4 py-12'>
      <ToastContainer />
      <div className="flex gap-28 justify-center items-center flex-wrap">
        <img className='hidden md:inline' src="/assets/contact.webp" alt="contact" />
        <form className='max-w-[686px] w-full' onSubmit={handleSubmit}>
          <legend className='h2-styled'>Contacta con nosotros</legend>
          <p className='mt-8'>Entendemos la importancia de las relaciones, por eso es nuestra prioridad ayudarte</p>
          <fieldset className='mt-16 flex flex-col gap-8 max-w-full'>
            <fieldset className='w-full flex gap-4 flex-col md:flex-row'>
              <label htmlFor="nombre" className='h-[70px] flex flex-col justify-between flex-grow'>
                Nombre
                <input
                  className='bg-inherit border-b-2 border-secondary focus-visible:outline-none flex-grow'
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email" className='h-[70px] flex flex-col justify-between flex-grow'>
                Email
                <input
                  className='bg-inherit border-b-2 border-secondary focus-visible:outline-none flex-grow'
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </fieldset>
            <fieldset className='w-full'>
              <label htmlFor="asunto" className='h-[70px] flex flex-col justify-between flex-grow'>
                Asunto
                <input
                  className='bg-inherit border-b-2 border-secondary focus-visible:outline-none flex-grow'
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                />
              </label>
            </fieldset>
            <fieldset className='w-full'>
              <label htmlFor="mensaje" className='min-h-[70px] flex flex-col justify-between flex-grow'>
                Mensaje
                <textarea
                  className='bg-inherit outline-none focus-visible:outline-none border-b-2 border-secondary w-full'
                  name="mensaje"
                  rows="8"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </label>
            </fieldset>
            <button type='submit' className="w-[195px] h-[51px] rounded-full border border-neutral-800 flex-col justify-center items-center inline-flex overflow-hidden">
              <div className="w-full h-full bg-neutral-800 shadow-inner shadow-white/25 justify-center items-center gap-2.5 inline-flex text-white">
                Enviar
              </div>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
