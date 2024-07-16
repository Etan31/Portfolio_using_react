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
      <Navbar aboutRef={aboutRef} projectsRef={projectsRef} testimonialsRef={testimonialsRef} contactRef={contactRef} />

        {/* <Resume ref={resumeRef} /> */}
      
      
      
      <main>
        < Socials />

        <section className="main_section">
          <p className="paragraph highlight">Hi, my name is </p>
          <h1 className="name">Tristan Tumbaga.</h1>
          <h2 className="paragraph name">I build things for the web.</h2>

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