import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <section className="Contact" ref={ref}>
      <h2 className="numbered-heading" >Some Things I’ve Built</h2>
    </section>
  );
});

export default Contact;