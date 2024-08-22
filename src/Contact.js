import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/contact.css';

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect the form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    // Send the email
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.log('Failed to send email:', error.text);
    });

    // TODO: have a notification
    e.target.reset();
  }

  return (
    <section className="contact" ref={ref}>
      <h2 className="numbered-heading">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-text">
          
          <p>
            I'm currently looking for new opportunities. Feel free to reach out if you have any questions or just want to say hi!
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="submitBtn">
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
