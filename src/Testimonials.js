import React from 'react';

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <div className="About" ref={ref}>
      {/* ... */}
      <h1>hello Testimonials</h1>
    </div>
  );
});

export default Testimonials;