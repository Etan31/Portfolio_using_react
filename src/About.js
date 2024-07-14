import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <div className="About" ref={ref}>
      {/* ... */}
      <h1>hello About</h1>
    </div>
  );
});

export default About;