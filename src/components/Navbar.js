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
  <a href="https://www.tristanehrontumbaga.xyz/">
    <h1 className="portfolio-name start logo2">
      <MyLogo className="t-logo" />
    </h1>
  </a>
  <ol className="navList navList2">
    <li className="navMenu" onClick={()=> handleClick(aboutRef)}>About</li>
    <li className="navMenu" onClick={()=> handleClick(projectsRef)}>Projects</li>
    <li className="navMenu" onClick={()=> handleClick(testimonialsRef)}>Testimonials</li>
    <li className="navMenu" onClick={()=> handleClick(contactRef)}>Contact</li>
    <div className="resumebtn-div">
      
      <a className="resume-button" href='https://github.com/Etan31/resume_file/blob/5991ab67c9682be63599b9b02abc3455add10662/Tristan_Ehron_Tumbaga_Resume.pdf'
        rel="noopener noreferrer" target="_blank">
        Resume
      </a>
    </div>
  </ol>
</nav>
  );
}

export default Navbar;
