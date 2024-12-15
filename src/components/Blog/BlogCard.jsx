import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = ({article}) => {
    console.log(article.category.name)
    console.log(article.cover.name)
    return (
        <Link to={`/blog/${article?.slug}`} className="w-[483.78px] h-[490px] flex-col justify-start items-start gap-4 inline-flex text-left relative">
            <div className="image relative">
                <span className='absolute bottom-4 left-4 bg-white/20 px-4 py-2 rounded-full text-white font-medium z-10 backdrop-blur-sm border-white '>{article.category.name}</span>
                <img src={`https://nexum-cms-production.up.railway.app${article.cover.url}`} className="w-[483.78px] h-[391px] bg-black/opacity-30 rounded-2xl bg-black/30 brightness-50" />
            </div>
            <div className="self-stretch text-neutral-800 text-xl font-bold ">{article?.title}</div>
            <div className="justify-start items-start gap-4 inline-flex">
                <div className="opacity-70 text-neutral-800/opacity-80 text-base font-normal ">Leer más</div>
                <div className="w-[19px] h-[19px] relative" />
            </div>
        </Link>
    )
}

export default BlogCard