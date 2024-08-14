import React from 'react';

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <section className="Testimonials" ref={ref}>
      
      <div class="wrapper">
        <div class="container"></div>
      </div>
      <div class="wrapper">
        <div class="container"></div>
      </div>
      <div class="wrapper">
        <div class="container"></div>
      </div>
    </section>
  );
});

export default Testimonials;