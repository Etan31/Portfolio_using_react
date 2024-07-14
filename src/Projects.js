import React from 'react';

const Project = React.forwardRef((props, ref) => {
  return (
    <div className="About" ref={ref}>
      {/* ... */}
      <h1>hello Project</h1>
    </div>
  );
});

export default Project;