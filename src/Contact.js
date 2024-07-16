import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <article className="About" ref={ref}>
      {/* ... */}
      <h1>hello Contact</h1>
    </article>
  );
});

export default Contact;