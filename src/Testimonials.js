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
              <div class="user-name"></div>
            </div>
            <p class="testimony-p"></p>
        </div>
        <div class="wrapper">
            <div class="user-info">
              <img src="" alt="" class="img"></img>
              <div class="user-occupation"></div>
              <div class="user-name"></div>
            </div>
            <p class="testimony-p"></p>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;