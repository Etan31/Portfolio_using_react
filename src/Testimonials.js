import React, { useState, useEffect, useRef } from 'react';
import './css/testimony.css';
import sampleImg from './imgs/sample-img.jpg';

const Testimonials = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 3; // Number of testimonial items

  const carouselRef = useRef(null);

  const updateCarousel = () => {
    const offset = -currentIndex * 100;
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${offset}%)`;
    }
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <section className="Testimonials" ref={ref}>
      <h2 className="numbered-heading">What They’re Saying</h2>

      <div className="testimony-container">
        <div className="carousel" ref={carouselRef}>
          <div className="wrapper">
            <img src={sampleImg} alt="sample profile" className="img-profile"></img>
            <div className="user-name">Sample A. Username</div>
            <div className="user-profession">Profession ABC</div>
            <p className="testimony-p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dolores voluptatum exercitationem nostrum ad
              itaque cupiditate.
            </p>
          </div>
          <div className="wrapper">
            <img src={sampleImg} alt="sample profile" className="img-profile"></img>
            <div className="user-name">Sample B. Username</div>
            <div className="user-profession">Profession ABC</div>
            <p className="testimony-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores voluptatum exercitationem nostrum ad
              itaque cupiditate.
            </p>
          </div>
          <div className="wrapper">
            <img src={sampleImg} alt="sample profile" className="img-profile"></img>
            <div className="user-name">Sample C. Username</div>
            <div className="user-profession">Profession ABC</div>
            <p className="testimony-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores voluptatum exercitationem nostrum ad
              itaque cupiditate.
            </p>
          </div>
        </div>
        <button className="carousel-control prev" onClick={handlePrev}>‹</button>
        <button className="carousel-control next" onClick={handleNext}>›</button>
      </div>
    </section>
  );
});

export default Testimonials;
