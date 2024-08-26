// import MyLogo from './../icons/myLogo.svg';
import MyLogo from './../components/Logo';
import React, {useState} from 'react';

import Ic_Menu from './../icons/ic_menu.jpg';

const Navbar = ({ aboutRef, projectsRef, testimonialsRef, contactRef }) => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="sideNav">
      <h1 className="portfolio-name start">
        <MyLogo className="t-logo" />
        
        
      </h1>
      <ol className="navList">
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
      <div className="side-menu">
        {/* <img src={Ic_Menu} alt="Menu" /> */}
        <img  src={Ic_Menu} className="menuBtn" alt="Menu"  onClick={onClickMenu}/>
      </div>
            {/* Side menu content */}
      <div className={`sideMenuContent ${isMenuOpen ? 'open' : ''}`}>
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
      </div>
    </nav>
  );
}

export default Navbar;
