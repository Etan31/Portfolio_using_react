import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <section className="Contact" ref={ref}>
      <h2 className="numbered-heading" >Get in Touch</h2>
      <h3> Secret  :) </h3>
    </section>
  );
});

export default Contact;