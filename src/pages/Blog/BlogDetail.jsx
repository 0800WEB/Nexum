import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const BlogDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = `https://nexum-cms-production.up.railway.app/api/articles?filters[slug][$eq]=${slug}&populate=cover&populate=author.avatar&populate=category`;
    const API_TOKEN = '3f7caa4c91a691f966feff7f2703555998b548b18cbe0933c04eae8254ceda0e687d4ffe49c363f78bfa845b86666e8e2f85e87d5f4f9dab4061f365a9f73e4d6f069582c380cce10462efdf2e99c1b417f4716e0d6349589252b6553e598b61e4e7920c57046b56cefd68b1bf21a778090d04c0307df98d7c5e40671cd327d4';

    axios
      .get(API_URL, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      })
      .then((response) => {
        console.log(response.data.data[0])
        if (response.data.data.length > 0) {
          setArticle(response.data.data[0]);
        }
      })
      .catch((error) => console.error('Error al obtener el artículo:', error))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div>Cargando...</div>;
  if (!article) return <div>No se encontró el artículo.</div>;

  const { title, cover, author, content, category, publishedAt, description } = article;

  return (
    <div className="min-h-screen items-center flex flex-col gap-[64px] w-full justify-center py-8">
          <Helmet>
      {/* Título dinámico */}
      <title>{title} | Nexum Blog</title>

      {/* Meta descripción */}
      <meta name="description" content={description} />

      {/* Propiedades Open Graph para redes sociales */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://nexum-cms-production.up.railway.app${cover?.url}`} />
      <meta property="og:type" content="article" />
      <meta property="og:published_time" content={publishedAt} />

      {/* Autor */}
      <meta name="author" content={author.name} />

      {/* Categorías */}
      <meta name="article:section" content={category.name} />
    </Helmet>
      <div className='flex flex-col max-w-[750px] gap-8'>
        <h2 className="h2-styled">{title}</h2>
        <div className='flex flex-wrap w-full gap-4'>
          <span className='font-medium'>{category.name}</span>
          <span>•</span>
          <span>{new Date(publishedAt).toLocaleDateString('es-ES', { 
            year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' 
          })}</span>
        </div>
        <div className="w-full h-28 relative flex-shrink-0 flex gap-4">
          <img
            className="w-24 h-24 left-0 top-0 absolute object-cover rounded-full"
            src={`https://nexum-cms-production.up.railway.app${author.avatar?.url}`}
            alt={`Foto del autor: ${author?.name}`}
          />
          <div className="left-[143px] top-0 absolute text-black text-[32px] font-medium">
            {author?.name || 'Nombre del autor'}
          </div>
        </div>
        <img
          className="max-h-[653px] w-full rounded-md object-cover max-w-[750px]"
          src={`https://nexum-cms-production.up.railway.app${cover?.url}`}
          alt={title}
        />
        <div className="text-neutral-800/opacity-80 text-base font-normal">
          {content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index} dangerouslySetInnerHTML={{ __html: block.children.map(child => child.text).join(' ') }} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
