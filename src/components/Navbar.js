// import MyLogo from './../icons/myLogo.svg';
import MyLogo from './../components/Logo';

const Navbar = ({ aboutRef, projectsRef, testimonialsRef, contactRef }) => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <h1 className="portfolio-name start">
        <MyLogo className="t-logo" />
        
        
      </h1>
      <ol>
        <li className="navMenu" onClick={() => handleClick(aboutRef)}>About</li>
        <li className="navMenu" onClick={() => handleClick(projectsRef)}>Projects</li>
        <li className="navMenu" onClick={() => handleClick(testimonialsRef)}>Testimonials</li>
        <li className="navMenu" onClick={() => handleClick(contactRef)}>Contact</li>
        <div className="resumebtn-div">
          <a
            className="resume-button"
            href="/Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </ol>
    </nav>
  );
}

export default Navbar;
