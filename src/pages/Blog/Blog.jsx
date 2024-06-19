import React from 'react'
import CasesCard from '../../components/Cases/CasesCard'

const Blog = () => {
  return (
    <div className='min-h-screen spacing flex flex-col gap-12 lg:gap-24 items-center text-center'>
         <section className='max-w-[735px] flex flex-col gap-8'>
            <h3 className='h2-styled'>Blog</h3>
            <p>Contenido de valor para nutrirte de creatividad</p>
        </section>
        <div className="wrapper-component flex gap-28 sm:gap-4 flex-wrap justify-center items-center">
        <CasesCard/>
        <CasesCard/>
        <CasesCard/>
        </div>
    </div>
  )
}

export default Blog