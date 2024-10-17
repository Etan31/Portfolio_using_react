import Navbar from './components/Navbar';
import { useRef, useEffect ,useState } from 'react';
import ScrollReveal from 'scrollreveal';

import About from './About';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

import Socials from './components/Socials';
import Mailto from './components/mailto';
// import MarkIC from './imgs/optimized/mark.png';
import MenuBtn from './icons/ic_menu.jpg';
import CloseBtn from './icons/ic_x_close.png';

function Main() {

// const [showNotification, setShowNotification] = useState(true);
const [menuVisible, setMenuVisible] = useState(false);


  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const cursorRef = useRef(null);
  const headerRef = useRef(null);
  

  useEffect(() => {

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const cursor = cursorRef.current;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

  let prevScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < prevScrollY && currentScrollY < 200) {
      headerRef.current.classList.remove('hidden');
    }
    if (currentScrollY > prevScrollY) {
      // Scrolling down
      if (currentScrollY > 200) {
        headerRef.current.classList.add('hidden');
      }
    } else {
      // Scrolling up
      headerRef.current.classList.remove('hidden');
    }
    if (currentScrollY > 0) {
      headerRef.current.classList.add('scrolled');
    } else {
      headerRef.current.classList.remove('scrolled');
    }

    prevScrollY = currentScrollY;
  };
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    

    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '70px',
      duration: 500,
      delay: 200,
      reset: false,
    });


    //notif to show my porfolio under development
    // setTimeout(() => {
    //   setShowNotification(false);
    // }, 5000);


    sr.reveal(aboutRef.current, { delay: 100, viewFactor: 0.2 });
    sr.reveal(projectsRef.current, { delay: 200, viewFactor: 0.05 });
    sr.reveal(testimonialsRef.current, { delay: 300, viewFactor: 0.2 });
    sr.reveal(contactRef.current, { delay: 400, viewFactor: 0.2 });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };


  return (
    <div className="Main">
      {/* {showNotification && (
        <div className="notification">
          <img src={MarkIC} className="img-notif" alt="exclamation mark"/>
          <p className="text-notif">Under Development — Stay Tuned!</p>
        </div>
      )} */}

      <div className="cursor" ref={cursorRef}></div>
      <header className="heading-nav" ref={headerRef}>
        <Navbar 
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          testimonialsRef={testimonialsRef}
          contactRef={contactRef} 
        />
        <button className="menubtn123 menubtnNotclose" onClick={toggleMenu}> 
          <img src={MenuBtn} className="Menubtn" alt="Humberger menu" />
        </button>
      </header>
      
      <main>
        {menuVisible && (
          <aside className="menuAside">
            <div className="navto">
              <nav className="sideNav navMobile">
                <button className="menubtn123 menubtnIsclose" onClick={toggleMenu}> 
                  <img src={CloseBtn} className="Menubtn closeBtn" alt="Close menu" />
                </button>
                <ol className="sideMenu-ol">
                  <li className="navMenu sidemenu2" onClick={()=> {aboutRef.current.scrollIntoView({ behavior: 'smooth' }); toggleMenu();}}>
                    About
                  </li>
                  <li className="navMenu sidemenu2" onClick={()=> {projectsRef.current.scrollIntoView({ behavior: 'smooth' }); toggleMenu();}}>
                    Projects
                  </li>
                  <li className="navMenu sidemenu2" onClick={()=> {testimonialsRef.current.scrollIntoView({ behavior: 'smooth' }); toggleMenu();}}>
                    Testimonials
                  </li>
                  <li className="navMenu sidemenu2" onClick={()=> {contactRef.current.scrollIntoView({ behavior: 'smooth' }); toggleMenu();}}>
                    Contact
                  </li>

                  <div className="resumebtn-div">
                    <a className="resume-button" href='https://drive.google.com/file/d/1Dj3mxCz1xES7yYav8Hg6eTQib-oJkz4X/view?usp=sharing'
                      rel="noopener noreferrer" target="_blank">
                      Resume
                    </a>
                  </div>
                </ol>
              </nav>
            </div>
          </aside>
        )}

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
                {/* I work as a backend developer full-time, and capable of creating <br />
                solid server-side solutions as well as exceptional websites. Building scalable, <br />
                 effective, and high-quality applications br is my area of expertise, <br />
                 and I constantly provide amazing online experiences. */}
                 I am a junior web developer who specializes in creating
                solid server-side solutions as well as exceptional websites. Building scalable, 
                 effective, and high-quality applications is my area of expertise, 
                 and I constantly provide amazing online experiences.
                 {/* <span className="highlight">This portfolio is still work in progress.</span> */}
              </p>
            </div>
            <div className="fadeup-enter-done" ><a className="getInTouch" href="mailto:tristan.ehron.tumbaga@gmail.com"><button className="get-in-touch" >Get In Touch</button></a></div>
          </section>

          {/* Pages */}
          <About ref={(element) => aboutRef.current = element} /> 
          <Projects ref={projectsRef} />
          <Testimonials ref={testimonialsRef} />
          <Contact ref={contactRef} />
        </section>
      </main>
      <footer>
        <p className="credits">Design inspired by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>.</p>
      </footer>

    </div>

  );
}

export default Main;