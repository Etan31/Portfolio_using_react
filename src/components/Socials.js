import Github_ic from './../icons/github_ic.png';
import LinkedIn from './../icons/linkedIn_ic.png'

const Socials = () => {
   return ( 
      <aside className="left">
         <a href="https://github.com/Etan31">
            <img className="social_ic" src={Github_ic} alt="Github icon"/>
         </a>

         <a href="https://www.linkedin.com/in/tristan-tumbaga-b42478175/">
            <img className="social_ic" src={LinkedIn} alt="LinkedIn icon" />
         </a>
          <div className="vertical"></div>
      </aside>
    );
}
 
export default Socials;