import React from 'react';

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <section className="About" ref={ref}>
      {/* ... */}
      <h1>hello Testimonials</h1>
    </section>
  );
});

export default Testimonials;