import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className="About" ref={ref}>
      {/* ... */}
      <h1>hello Contact</h1>
    </div>
  );
});

export default Contact;