import React from 'react'

const BlogCard = () => {
    return (
        <div className="w-[483.78px] h-[490px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-[483.78px] h-[391px] bg-black/opacity-30 rounded-md" />
            <div className="self-stretch text-neutral-800 text-xl font-bold font-['Helvetica Neue LT Std']">De esta manera logramos publicidad efectiva en nuestros clientes</div>
            <div className="justify-start items-start gap-4 inline-flex">
                <div className="opacity-70 text-neutral-800/opacity-80 text-base font-normal font-['Helvetica Neue LT Std']">Leer más </div>
                <div className="w-[19px] h-[19px] relative" />
            </div>
        </div>
    )
}

export default BlogCard