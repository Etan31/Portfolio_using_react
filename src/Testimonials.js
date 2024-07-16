import React from 'react';

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <article className="About" ref={ref}>
      {/* ... */}
      <h1>hello Testimonials</h1>
    </article>
  );
});

export default Testimonials;