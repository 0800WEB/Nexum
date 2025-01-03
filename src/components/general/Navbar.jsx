import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const Navbar = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 820);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollLinkClick = (to) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: to } });
    } else {
      scroller.scrollTo(to, { smooth: true });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, { smooth: true });
    }
  }, [location]);

  const Mobile = () => (
    <>
      <nav className="bg-primary w-full flex items-center justify-between">
        <img className='max-w-[154px]' src={"/logo-dark.avif"} alt="Nexum" />
        <button 
          onClick={toggleMenu} 
          className={`z-30 flex flex-col justify-between w-6 h-6 bg-transparent border-none cursor-pointer focus:outline-none transition-all duration-300 ${menuOpen ? 'open' : ''}`}>
          <span className={`block w-6 h-0.5 bg-secondary transform transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-secondary transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0 bg-white' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-secondary transform transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-3.5 bg-white' : ''}`}></span>
        </button>
      </nav>
      <div className={`fixed z-20 top-0 left-0 w-full h-full bg-secondary transform transition-transform duration-500 ease-in-out ${menuOpen ? 'drawer translate-x-0' : '-translate-x-full'} flex flex-col gap-4 p-4 justify-center items-center`}>
        <Link className="text-white text-lg" onClick={toggleMenu} to="/">INICIO</Link>
        <button className="text-white text-lg" onClick={() => handleScrollLinkClick('servicios')}>SERVICIOS</button>
        <Link className="text-white text-lg" onClick={toggleMenu} to="/casos-de-exito">CASOS DE ÉXITO</Link>
        <Link className="text-white text-lg" onClick={toggleMenu} to="/nosotros">NOSOTROS</Link>
        <Link className="text-white text-lg" onClick={toggleMenu} to="/blog">BLOG</Link>
        <Link className="text-white text-lg" onClick={toggleMenu} to="/contacto">CONTACTO</Link>
        <div className="flex gap-2.5">
          <Link className="text-white" to="https://www.instagram.com/nexum.ar/" aria-label="instagram-link"><FaInstagram /></Link>
          <Link className="text-white" to="https://www.linkedin.com/company/nexum-comunicaci%C3%B3n-integral" aria-label="linkedin-link"><FaLinkedin /></Link>
        </div>
      </div>
    </>
  );

  if (isMobile) {
    return <Mobile />;
  } else {
    return (
      <nav className="w-full flex items-center gap-20">
        <img className='max-w-[154px]' src={"/logo-dark.avif"} alt="Nexum" />
        <div className="flex gap-4 items-center font-bold text-sm">
          <Link className="text-secondary" to="/">INICIO</Link>
          <button className="text-secondary" onClick={() => handleScrollLinkClick('servicios')}>SERVICIOS</button>
          <Link className="text-secondary" to="/casos-de-exito">CASOS DE ÉXITO</Link>
          <Link className="text-secondary" to="/nosotros">NOSOTROS</Link>
          <Link className="text-secondary" to="/blog">BLOG</Link>
          <Link className="text-secondary" to="/contacto">CONTACTO</Link>
          <div className="flex gap-2.5">
          <Link className="text-secondary" to="https://www.instagram.com/nexum.ar/" aria-label="instagram-link"><FaInstagram /></Link>
          <Link className="text-secondary" to="https://www.linkedin.com/company/nexum-comunicaci%C3%B3n-integral" aria-label="linkedin-link"><FaLinkedin /></Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
