import React, { useState, useEffect, useRef } from 'react';
import './css/testimony.css';
import Javier from './imgs/profiles/Javier.jpg';
import Armand from './imgs/profiles/Armand.jpg';
import Quote_ic from './imgs/quote.png';

const Testimonials = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 1; // Number of testimonial items

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
          <div className="testimony-wrapper">
            <img src={Armand} alt="sample profile" className="img-profile"></img>
            <div className="user-name"><span className="highlight">Armand Ralph Anacta</span></div>
            <div className="user-profession">QCBOT WEB DEVELOPER</div>
            <div className="qoutes_c">
              <img src={Quote_ic} alt="Testimony Qoute icon" />
              <img src={Quote_ic} alt="Testimony Qoute icon" />
            </div>
            <p className="testimony-p">
              Tristan Ehron consistently delivers outstanding web solutions, demonstrating both skill and innovation. 
              Whether it's complex applications or optimizing performance, his expertise is evident.
              Working with Tristan has always been a smooth and enjoyable experience. 
              I highly recommend him for anyone in need of top-quality web development services.
            </p>
          </div>
          {/* <div className="testimony-wrapper">
            <img src={Javier} alt="sample profile" className="img-profile"></img>
            <div className="user-name">
              <span className="highlight">Shane Francis Javier</span>
            </div>
            <div className="user-profession">Unknown Profession</div>
            <div className="qoutes_c">
              <img src={Quote_ic} alt="Testimony Qoute icon" />
              <img src={Quote_ic} alt="Testimony Qoute icon" />
            </div>
            <p className="testimony-p">
              Etan was very cute and I like him.
            </p>
          </div> */}
        </div>

        {/* TODO: Change this if there are multiple Testimony */}
        {/* <button className="carousel-control prev" onClick={handlePrev}>‹</button>
        <button className="carousel-control next" onClick={handleNext}>›</button> */}
      </div>
    </section>
  );
});

export default Testimonials;
