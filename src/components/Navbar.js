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
    <li className="navMenu" onClick={()=> handleClick(aboutRef)}>About</li>
    <li className="navMenu" onClick={()=> handleClick(projectsRef)}>Projects</li>
    <li className="navMenu" onClick={()=> handleClick(testimonialsRef)}>Testimonials</li>
    <li className="navMenu" onClick={()=> handleClick(contactRef)}>Contact</li>
    <div className="resumebtn-div">
      {/* resume uploaded is for software dev */}
      <a className="resume-button" href={process.env.REACT_APP_RESUME_URL} rel="noopener noreferrer" target="_blank">
        Resume
      </a>
    </div>
  </ol>
</nav>
  );
}

export default Navbar;
