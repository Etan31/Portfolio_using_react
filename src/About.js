import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <section className="About" ref={ref}>
      <h2 className="numbered-heading"> About Me</h2>
      <div className="inner">
        <div className="about-me-text">
          <div className="paragaraph">Hello! My name is Tristan Ehron Tumbaga, and I enjoy creating things that live on
            the internet. My interest in web development began when I chose to explore the world of online technologies;
            playing with various projects taught me a lot about HTML, CSS, and JavaScript!
            Fast forward to now, and I've had the opportunity to work for <span className="highlight">Bytewise Information Technology Solutions</span> and
            <span className="highlight"> DOST PSTO-Eastern Samar</span> in Borongan, Eastern Samar. These days, my major focus is on developing
            user-friendly products and experiences.
            While I am not currently employed, I'm constantly developing my skills and working on projects to keep up
            with the latest technology advancements.
            Here are a few tools & technologies I have been working with recently:

          </div>
          <ul className="skill-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="about-me-pic">
          <div className="wrapper"> {/**this image should change it's color  */}
            <div className=" image-wrapper img">
              {/* <picture>
              </picture> */}
                <img src="./imgs/profile-white-bg.jpg" alt="Profile headshot" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;