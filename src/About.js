import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <section className="About" ref={ref} >
      {/* ... */}
      <h1>hello About</h1>
    </section>
  );
});

export default About;