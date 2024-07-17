import Navbar from './components/Navbar';
import { useRef } from 'react';

import About from './About';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

import Socials from './components/Socials';

function Main() {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  // const resumeRef = useRef(null);

  return (
    <div className="Main">
      {/* resumeRef={resumeRef} */}
      {/* Header */}
      <header>
        <Navbar aboutRef={aboutRef} projectsRef={projectsRef} testimonialsRef={testimonialsRef} contactRef={contactRef} />
      </header>

        {/* <Resume ref={resumeRef} /> */}
      
      
      <main>
        < Socials />

        <section className="main_section">
          <section className="home">
            <p className="paragraph highlight">Hi, my name is </p>
            <h1 className="name">Tristan Tumbaga.</h1>
            <h2 className="paragraph name">I build things for the web.</h2>
            {/* <p className="short-intro">I'm a software developer who specializes in developing the server-side <br/>
            (and occasionally designing) remarkable web experiences.<br/> 
            Currently, I'm a backend developer at <span className="highlight">xXxXxXxXxXx</span> focused on building <br/>
            high-quality, scalable, and efficient applications.</p> */}
            <p className="short-intro">
              I work as a backend developer full-time, and capable of creating <br />
              solid server-side solutions as well as exceptional websites. Building scalable, <br />
               effective, and high-quality applications br is my area of expertise, <br />
               and I constantly provide amazing online experiences.
            </p>
            <button className="get-in-touch">Get In Touch</button>
          </section>

                  {/* Pages */}
          <About ref={aboutRef} /> 
          <Projects ref={projectsRef} />
          <Testimonials ref={testimonialsRef} />
          <Contact ref={contactRef} />
        </section>
      </main>
    </div>

  );
}

export default Main;