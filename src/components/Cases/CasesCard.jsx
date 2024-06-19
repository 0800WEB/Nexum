import React from 'react'

const CasesCard = () => {
  return (
    <div className="max-w-[483.78px] bg-black/opacity-40 rounded-md flex flex-col gap-4 items-start cursor-pointer" >
        <img className='w-full max-h-[391px]' src={`/assets/cases/exar.png`} alt={`exar`} />
        <h3 className="h6-styled flex-shrink-0">Exar</h3>
    </div>
  )
}

export default CasesCard