import Navbar from './components/Navbar';
import { useRef, useEffect } from 'react';

import About from './About';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

import Socials from './components/Socials';
import Mailto from './components/mailto';

function Main() {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  // const resumeRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const cursor = cursorRef.current;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="Main">
      <div className="cursor" ref={cursorRef}></div>
      <header>
        <Navbar aboutRef={aboutRef} projectsRef={projectsRef} testimonialsRef={testimonialsRef} contactRef={contactRef} />
      </header>
      
      <main>
        < Socials />
        < Mailto />

        <section className="main_section">
          <section className="home">
            <div className="fadeup-enter-done">
              <p className="paragraph highlight">Hi, my name is </p>
            </div>
            <div className="fadeup-enter-done">
              <h1 className="name">Tristan Tumbaga.</h1>
            </div>
            <div className="fadeup-enter-done">
              <h2 className="paragraph name">I build things for the web.</h2>
            </div>
            {/* <div className="fadeup-enter-done">
              <p className="short-intro">I'm a software developer who specializes in developing the server-side <br/>
              (and occasionally designing) remarkable web experiences.<br/>
              Currently, I'm a backend developer at <span className="highlight">xXxXxXxXxXx</span> focused on building <br/>
              high-quality, scalable, and efficient applications.</p>
            </div> */}
            <div className="fadeup-enter-done">
              <p className="short-intro">
                I work as a backend developer full-time, and capable of creating <br />
                solid server-side solutions as well as exceptional websites. Building scalable, <br />
                 effective, and high-quality applications br is my area of expertise, <br />
                 and I constantly provide amazing online experiences.
              </p>
            </div>
            <div className="fadeup-enter-done"><button className="get-in-touch">Get In Touch</button></div>
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