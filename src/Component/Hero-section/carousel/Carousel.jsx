import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const items = [
    {
      heading: "Enhance fortune 50 company's insights teams research capabilities",
    },
    {
      heading: "fortune 50 company's insights teams research capabilities",
    },
    {
      heading: " company's insights teams research capabilities",
    },
  ];

  const handleIndexClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); 

    return () => clearTimeout(transitionTimeout);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div
        className={`carousel-content ${isTransitioning ? 'transitioning' : ''}`}
      >
        <p>{items[currentIndex].heading}</p>
      </div>
      <div className="carousel-controls">
        {items.map((_, index) => (
          <div
            key={index}
            className={`carousel-control ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => handleIndexClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;