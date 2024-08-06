import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './css/project.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useAnimations } from './hooks/useAnimation';


// Project preview images
import skycastImage from './imgs/skycast/skycast1.png';
import skycastImage2 from './imgs/skycast/skycast2.png';
import skycastImage3 from './imgs/skycast/skycast3.png';

import stt1 from './imgs/stt/stt1.png';
import stt2 from './imgs/stt/stt2.png';
import stt3 from './imgs/stt/stt3.png';


const Project = React.forwardRef((props, ref) => {
  const { 
    skycast1Ref,
    skycast2Ref,
    skycast3Ref,
    stt1Ref,
    stt2Ref,
    stt3Ref
  } = useAnimations();

  return (

    <section className="Projects" ref={ref}>


      <h2 className="numbered-heading">Some Things I’ve Built</h2>
      <ul className="featured-projects">

        {/* project 1 */}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">Skycast</h3>
              <div className="project-description">
                <p >SkyCast is a web project that offers real-time weather updates for
                  your current location or a searched location, featuring a 5-day forecast, air quality index, humidity,
                  pressure, and more.</p>
              </div>
              <ul className="project-tech-list">
                <li>JavaScript (ES6+)</li>
                <li>OpenWeatherMap API</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="project-links">

                <a target="_blank" rel="noreferrer" href="https://github.com/Etan31/skycast">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" role="img" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-github">
                    <title>GitHub</title>
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                  </svg>
                </a>

                {/* Todo: change this when published */}
                <a target="_blank" rel="noreferrer" href="https://etan31.github.io/skycast/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="new" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="none" stroke="currentColor">
                    <path
                      d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                    </svg>
                </a>

              </div>
            </div>
          </div> 
          <div className="project-image">
            <div className="windowPreview"><img src={skycastImage} ref={skycast1Ref} className="imgPreview skycast1" alt="skycast img preview"/></div>
            <div className="mobilePreview">
              <img  src={skycastImage2} ref={skycast2Ref} className="imgPreview skycast2" alt="skycast img preview"/>
              <img src={skycastImage3} ref={skycast3Ref} className="imgPreview skycast3" alt="skycast img preview"/>
            </div>
          </div>
        </li>

        {/* project 2 */}
        <li className="projects">
          <div className="project-content project2Content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">Speech2Text</h3>
              <div className="project-description">This project allows to your speech and convert it into text and can be saved as txt file.</div>
              <ul className="project-tech-list">
                <li>Nodejs</li>
                <li>Postgres</li>
                <li>Git</li>
                <li>Ejs</li>
              </ul>
              <div className="project-links">
                <a target="_blank" rel="noreferrer" href="https://github.com/Etan31/Speech2Text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" role="img" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-github">
                    <title>GitHub</title>
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                  </svg>
                </a>

                {/* Todo: change this when published */}
                <a target="_blank" rel="noreferrer" href="https://github.com/Etan31/Speech2Text/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="new" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="none" stroke="currentColor">
                    <path
                      d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                    </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">
            <div className="windowPreview">
              <img src={stt1} ref={stt1Ref} className="imgPreview stt1" alt="Speech-to-text img preview"/>
            </div>
            <div className="mobilePreview sttMobilePreview">
              <img src={stt2}  ref={stt2Ref} className="imgPreview stt2" alt="Speech-to-text img preview"/>
              <img src={stt3}  ref={stt3Ref}  className="imgPreview stt3" alt="Speech-to-text img preview"/>
            </div>
          </div>
        </li>

        {/* project 3 */}
        <li className="projects">
          <div className="project-content project3Content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">SchedBin</h3>
              <div className="project-description"></div>
              <ul className="project-tech-list">
                <li className="tech-list">Java</li>
                <li className="tech-list">Firebase</li>
                <li className="tech-list">GCP</li>
                <li className="tech-list">Git</li>
                <li className="tech-list">Postman</li>
              </ul>
              <div className="project-links">
                <a target="_blank" rel="noreferrer"
                  href="https://github.com/Etan31/SchedBin-Scheduler-for-Garbage-Collection-">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" height="24px" width="24px"  strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-github">
                    <title>GitHub</title>
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">

          </div>
        </li>

        {/* project 4 /// Ongoing*/}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">TrackRecord</h3>
              <div className="project-description"></div>
              <ul className="project-tech-list"></ul>
              <div className="project-links"></div>
            </div>
          </div>
          <div className="project-image"></div>
        </li>

      </ul>
    </section>

  );
});

export default Project;