import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = `https://nexum-cms.onrender.com/api/articles?filters[slug][$eq]=${slug}&populate=cover&populate=author.avatar&populate=category`;
    const API_TOKEN = '3f7caa4c91a691f966feff7f2703555998b548b18cbe0933c04eae8254ceda0e687d4ffe49c363f78bfa845b86666e8e2f85e87d5f4f9dab4061f365a9f73e4d6f069582c380cce10462efdf2e99c1b417f4716e0d6349589252b6553e598b61e4e7920c57046b56cefd68b1bf21a778090d04c0307df98d7c5e40671cd327d4';

    axios
      .get(API_URL, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      })
      .then((response) => {
        if (response.data.data.length > 0) {
          setArticle(response.data.data[0]); // Usamos el primer artículo
        }
      })
      .catch((error) => {
        console.error('Error al obtener el artículo:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div>Cargando...</div>;
  if (!article) return <div>No se encontró el artículo.</div>;

  // Extraemos los datos directamente del artículo
  const { title, cover, author, content } = article;
  console.log(article)
  return (
    <div className="min-h-screen items-center flex flex-col gap-[64px] w-full justify-center py-8">
      <div className='flex flex-col max-w-[750px] gap-8'>
        {/* Titulo */}
      <h2 className="h2-styled">{title}</h2>
      <div className='flex flex-wrap w-full gap-4'>
        <span className='font-medium'>{article.category.name}</span>
        <span>•</span>
        <span>{new Date(article.publishedAt).toLocaleDateString('es-ES', { 
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' 
  })}</span>
      </div>
        {/* Información del autor */}
        <div className="w-full h-28 relative flex-shrink-0 flex gap-4">
          <img
            className="w-24 h-24 left-0 top-0 absolute object-cover rounded-full"
            src={`https://nexum-cms.onrender.com${author.avatar?.url}`}
            alt={author?.name || 'Autor'}
          />
          <div className="left-[143px] top-[48px] absolute text-neutral-800/opacity-80 text-base font-normal flex">
            {author?.role || 'Descripción del autor'}
          </div>
          <div className="left-[143px] top-0 absolute text-black text-[32px] font-medium">
            {author?.name || 'Nombre del autor'}
          </div>
        </div>
        {/* Imagen de portada */}
        <img
          className="max-h-[653px] w-full rounded-md object-cover max-w-[750px]"
          src={`https://nexum-cms.onrender.com${cover?.url}`}
          alt={title}
        />

        {/* Información del artículo */}
        <div className="flex flex-col 2xl:flex-row 2xl:gap-8 2xl:justify-between w-full">

          {/* Contenido del artículo */}
          <div className="max-w-[985px] flex-col justify-start items-start gap-8 inline-flex 2xl:py-0 ">
            <div className="text-neutral-800/opacity-80 text-base font-normal">
              {content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: block.children.map(child => child.text).join(' ') }} />
                  );
                }
                return null; // Para otros tipos de bloques, manejar en el futuro
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
