import React from 'react'

const Origin = () => {
  return (
    <div className='spacing flex flex-col gap-12 lg:gap-24 bg-secondary justify-center items-center overflow-hidden'>
      <section className='text-white flex justify-center items-center flex-col gap-8'>
        <h3 className="h2-styled">De Jujuy para el mundo</h3>
        <p><strong>Nexum</strong> actualmente opera en Argentina y España, llevando una comunicación sin fronteras</p>
      </section>
      <img className='lg:max-w-[750px] w-full object-cover' src="/assets/map.webp" alt="Mapa" />
    </div>
  )
}

export default Origin