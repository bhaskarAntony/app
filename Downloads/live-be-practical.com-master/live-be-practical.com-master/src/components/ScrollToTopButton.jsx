// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTopButton.css'; // Create a CSS file for styling
import DialogModel from './DialogModel';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false)
  
  const openModal = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Listen to the scroll event to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > prevScrollY;

      // Check if scrolling direction is down
      setIsVisible(isScrollingDown);

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
   <div className='text-center'>

<button
      className={`scroll-to-top ${isVisible ? 'visible' : ''} btn-danger`}
      onClick={openModal}
    >
     Apply Now <i class="bi bi-chevron-double-right"></i>
    </button>
    <DialogModel
        show={showModal}
        onHide={handleClose}/>
   </div>
   
  );
};

export default ScrollToTopButton;