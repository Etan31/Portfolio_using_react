import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <article className="About" ref={ref}>
      {/* ... */}
      <h1>hello About</h1>
    </article>
  );
});

export default About;