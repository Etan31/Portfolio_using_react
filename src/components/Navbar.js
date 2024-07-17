import MyLogo from './../icons/myLogo.svg';

const Navbar = ({ aboutRef, projectsRef, testimonialsRef, contactRef }) => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <h1 className="portfolio-name start">
        <img src={MyLogo} className="t-logo" alt="T-logo" width="40" height="35"/>  

        
      </h1>
      <ol>
        <li className="navMenu" onClick={() => handleClick(aboutRef)}>About</li>
        <li className="navMenu" onClick={() => handleClick(projectsRef)}>Projects</li>
        <li className="navMenu" onClick={() => handleClick(testimonialsRef)}>Testimonials</li>
        <li className="navMenu" onClick={() => handleClick(contactRef)}>Contact</li>
        <button className="navMenu" >Resume</button>
      </ol>
    </nav>
  );
}

export default Navbar;
