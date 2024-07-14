import Navbar from './components/Navbar';
import { useRef } from 'react';

import About from './About';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

function Main() {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  // const resumeRef = useRef(null);

  return (
    <div className="Main">
      {/* resumeRef={resumeRef} */}
      <Navbar aboutRef={aboutRef} projectsRef={projectsRef} testimonialsRef={testimonialsRef} contactRef={contactRef} />

        {/* <Resume ref={resumeRef} /> */}
      
      
      <main className="home">
        <p className="paragraph highlight">Hi, my name is </p>
        <p className="name">Tristan Tumbaga.</p>
        <p className="paragraph name">I build things for the web.</p>
      </main>


        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Testimonials ref={testimonialsRef} />
        <Contact ref={contactRef} />
    </div>

  );
}

export default Main;