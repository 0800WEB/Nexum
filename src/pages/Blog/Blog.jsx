import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import BlogCard from '../../components/Blog/BlogCard';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const API_URL = "https://nexum-cms-production.up.railway.app/api/articles?populate=*";
    const API_TOKEN = "3f7caa4c91a691f966feff7f2703555998b548b18cbe0933c04eae8254ceda0e687d4ffe49c363f78bfa845b86666e8e2f85e87d5f4f9dab4061f365a9f73e4d6f069582c380cce10462efdf2e99c1b417f4716e0d6349589252b6553e598b61e4e7920c57046b56cefd68b1bf21a778090d04c0307df98d7c5e40671cd327d4";

    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      })
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => console.error("Error al obtener los artículos:", error));
  }, []);

  return (
    <div className='min-h-[90vh] spacing flex flex-col gap-12 lg:gap-24 items-center text-center'>
      <Helmet>
        <title>Blog de Creatividad | Inspírate con Contenido Único</title>
        <meta
          name="description"
          content="Explora nuestro blog para nutrirte de creatividad. Encuentra artículos sobre diseño, innovación y tendencias actuales que inspirarán tu próximo proyecto."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className='max-w-[735px] flex flex-col gap-8'>
        <h3 className='h2-styled'>Blog</h3>
        <p>Contenido de valor para nutrirte de creatividad</p>
      </section>
      <div className="wrapper-component flex gap-28 sm:gap-10 flex-wrap justify-center items-center">
        {articles.slice().reverse().map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
