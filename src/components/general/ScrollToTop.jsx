// src/components/general/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const options = {
    // your options here, for example:
    duration: 0,
    delay: 0,
    offset: 0, // Scrolls to element + 50 pixels down the page
    smooth: false,
  };
  useEffect(() => {
    scroll.scrollToTop(options);
  }, [pathname]);

  return null;
};

export default ScrollToTop;