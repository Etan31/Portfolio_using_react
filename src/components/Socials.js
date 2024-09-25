// import Github from './../icons/github_ic.svg';
// import LinkedIn from './../icons/linkedIn_ic.svg';
// import Twitter from './../icons/twitter.svg';

const Socials = () => {
   return ( 
      <aside className="left">
         <a target="_blank" rel="noreferrer" href="https://github.com/Etan31">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
               <title>GitHub</title>
               <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
               </path>
            </svg>
         </a>

         <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/17609111/tristan-ehron-tumbaga">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="50px" height="50px" fillRule="evenodd">
               <g fill="#8892b0" fillRule="evenodd" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter"
                  strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                  <g transform="scale(5.12,5.12)">
                  <path d="M40.92578,1.89063l-3.06641,0.52734l3.32813,18.20703l2.84375,-0.37109zM29.96875,6.35156l-2.86719,1.72656l10.19922,14.95703l2.51953,-1.55469zM20.79688,15.03125l-1.68359,2.67188l15.38672,9.29688l1.40234,-2.42187zM16.375,24.40234l-0.74609,3l17.73047,4.49219l0.28125,-2.69141zM9,29v18.98438l29.90234,0.01563v-0.01562c0.03125,0 0.09766,-18.98437 0.09766,-18.98437h-3v16h-24v-16zM15.15234,32.35547l-0.25,2.98438l18.09766,1.66016l0.20313,-2.5zM14.90234,39l0.09766,3l18,-0.07031v-2.92969z">
                  </path>
                  </g>
               </g>
            </svg>
         </a>
         
         <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tristan-ehron-tumbaga-b42478175/">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
               <title>LinkedIn</title>
               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
               <rect x="2" y="9" width="4" height="12"></rect>
               <circle cx="4" cy="4" r="2"></circle>
            </svg>
         </a>
          <div className="vertical"></div>
      </aside>
    );
}
 
export default Socials;