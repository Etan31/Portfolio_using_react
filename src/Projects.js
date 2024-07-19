import React from 'react';

const Project = React.forwardRef((props, ref) => {
  return (
    <section className="Projects" ref={ref}>
      {/* ... */}
      <h1>hello Project</h1>
    </section>
  );
});

export default Project;