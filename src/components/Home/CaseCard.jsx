import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const CaseCard = () => {
  return (
    <div className='min-w-[333.333px] max-w-[483px] max-h-[390px] bg-white relative flex-shrink cursor-pointer flex-1'>
        <img className='' src="/assets/cases/exar.png" alt="Exar" />
        <h3 className='h6-styled text-white text-center left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2 max-w-[408px]'>Re-styling de Exar, la multinacional de litio</h3>
        <div className="w-[127.87px] h-10 px-7 py-3.5 bg-white justify-center items-center gap-4 inline-flex font-bold absolute bottom-0 left-0">
            <FaArrowRight />
            <p>EXAR</p>
        </div>
    </div>
  )
}

export default CaseCard