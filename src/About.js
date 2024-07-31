import React from 'react';
import ProfilePic from './imgs/profile-1by1.jpg'

const About = React.forwardRef((props, ref) => {
  return (
    <section className="About" ref={ref}>
      <h2 className="numbered-heading"> About Me</h2>
      <div className="inner">
        <div className="about-me-text">
          <div className="paragaraph">
            <p>
              Hello! My name is Tristan Ehron Tumbaga, and I enjoy creating things that live on
              the internet. My interest in web development began when I chose to explore the world of online technologies;
              playing with various projects taught me a lot about HTML, CSS, and JavaScript!
            </p>
            <p>
              Fast forward to now, and I've had the opportunity to work for <span className="highlight"><a rel="noopener noreferer"  target="_blank" className="highlight-link" href="https://web.facebook.com/dostpstceasternsamar/">Bytewise Information Technology Solutions</a></span> and
              <span className="highlight"> <a className="highlight-link" rel="noopener noreferer" target="_blank" href="https://web.facebook.com/profile.php?id=61554203821069">DOST PSTO-Eastern Samar</a></span> in Borongan, Eastern Samar. These days, my major focus is on developing
              user-friendly products and experiences.
            </p>
            <p>
              While I am not currently employed, I'm constantly developing my skills and working on projects to keep up
              with the latest technology advancements.
            </p>
            <p>Here are a few tools & technologies I have been working with recently:</p>

          </div>
          <ul className="skill-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>Postman</li>
          </ul>

          
        </div>
        <div className="lbrXps">
          <div className="wrapper">
            <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
       
              <img data-main-image className="img-pic" sizes="(min-width: 500px) 500px, 100vw"
                decoding="async" 
                src={ProfilePic} 
                data-main-image="" 
                alt="Profile headshot"
                />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;