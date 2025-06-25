import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="scroll-Top">
      <div 
        className={`return-to-top ${isVisible ? 'fadeIn' : 'fadeOut'}`}
        onClick={scrollToTop}
        style={{ 
          display: isVisible ? 'block' : 'none',
          cursor: 'pointer'
        }}
      >
        <i className="fa fa-angle-up" id="scroll-top"></i>
      </div>
    </div>
  );
};

export default ScrollToTop; 