import React from 'react';

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <section className="Testimonials" ref={ref}>
      
      <div class="testimony-container">
        <div class="wrapper">
          {/* middle  user-info*/}
            <div class="user-info">
              <img src="" alt="" class="img"></img>
              <div class="user-occupation"></div>
              <div class="user-name">Sample A. Username</div>
            </div>
            <p class="testimony-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
        </div>
        <div class="wrapper">
            <div class="user-info">
              <img src="" alt="" class="img"></img>
              <div class="user-occupation"></div>
              <div class="user-name">Sample B. Username</div>
            </div>
            <p class="testimony-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;