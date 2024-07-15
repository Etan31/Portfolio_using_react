const Navbar = ({ aboutRef, projectsRef, testimonialsRef, contactRef, resumeRef }) => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <h1 className="portfolio-name start">Portfolio</h1>
      <ol>
        <li className="navMenu" onClick={() => handleClick(aboutRef)}>About</li>
        <li className="navMenu" onClick={() => handleClick(projectsRef)}>Projects</li>
        <li className="navMenu" onClick={() => handleClick(testimonialsRef)}>Testimonials</li>
        <li className="navMenu" onClick={() => handleClick(contactRef)}>Contact</li>
        <button className="navMenu" onClick={() => handleClick(resumeRef)}>Resume</button>
      </ol>
    </nav>
  );
}

export default Navbar;
