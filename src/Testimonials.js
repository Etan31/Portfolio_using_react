import React from 'react';
import './css/testimony.css';

import sampleImg from './imgs/sample-img.jpg';

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <section className="Testimonials" ref={ref}>
      
      <div className="testimony-container">
        <div className="wrapper">
          {/* middle  user-info*/}
            <img src={sampleImg}  alt="sample profile" className="img-profile"></img>
            <div className="user-name">Sample A. Username</div>
            <div className="user-profession">Profession ABC</div>
            <p className="testimony-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dolores voluptatum exercitationem nostrum ad itaque cupiditate.</p>
        </div>
        <div className="wrapper">
            <img src={sampleImg} alt="sample profile" className="img-profile"></img>
            <div className="user-name">Sample B. Username</div>
            <div className="user-profession">Profession ABC</div>
            <p className="testimony-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores voluptatum exercitationem nostrum ad itaque cupiditate. </p>
        </div>
        <div className="wrapper">
            <img src={sampleImg} alt="sample profile" className="img-profile"></img>
            <div className="user-name">Sample B. Username</div>
            <div className="user-profession">Profession ABC</div>
            <p className="testimony-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores voluptatum exercitationem nostrum ad itaque cupiditate. </p>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;