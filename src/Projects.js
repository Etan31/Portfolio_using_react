import React from 'react';

const Project = React.forwardRef((props, ref) => {
  return (
    <article className="About" ref={ref}>
      {/* ... */}
      <h1>hello Project</h1>
    </article>
  );
});

export default Project;