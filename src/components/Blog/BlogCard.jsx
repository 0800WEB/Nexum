import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = () => {
    return (
        <Link to={"/blog/exar"} className="w-[483.78px] h-[490px] flex-col justify-start items-start gap-4 inline-flex text-left">
            <img src='/assets/enfoque-1.png' className="w-[483.78px] h-[391px] bg-black/opacity-30 rounded-md" />
            <div className="self-stretch text-neutral-800 text-xl font-bold ">De esta manera logramos publicidad efectiva en nuestros clientes</div>
            <div className="justify-start items-start gap-4 inline-flex">
                <div className="opacity-70 text-neutral-800/opacity-80 text-base font-normal ">Leer más</div>
                <div className="w-[19px] h-[19px] relative" />
            </div>
        </Link>
    )
}

export default BlogCard