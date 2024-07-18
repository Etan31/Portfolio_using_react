import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <section className="About" ref={ref}>
      {/* ... */}
      <h1>hello Contact</h1>
    </section>
  );
});

export default Contact;