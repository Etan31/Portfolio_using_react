import React from 'react';
import './css/project.css';
import { useAnimations } from "./hooks/useAnimation";
import { motion } from "framer-motion";

// import { useAnimations } from './hooks/useAnimation';

// Project preview images
import skycastImage1 from './imgs/skycast/skycast1.png';
import skycastImage2 from './imgs/skycast/skycast2.png';
import skycastImage3 from './imgs/skycast/skycast3.png';

import stt1 from './imgs/stt/stt1.png';
import stt2 from './imgs/stt/stt2.png';
import stt3 from './imgs/stt/stt3.png';

import SchedBin1 from './imgs/schedBin/SchedBin1.png';
import SchedBin2 from './imgs/schedBin/SchedBin2.png';
import SchedBin3 from './imgs/schedBin/SchedBin3.png';
import SchedBin4 from './imgs/schedBin/SchedBin4.png';

import trackRecord from './imgs/Portfolio.png';

const Project = React.forwardRef((props, ref) => {
  const {
    skycast1Ref,
    skycast2Ref,
    skycast3Ref,
    stt1Ref,
    stt2Ref,
    stt3Ref,
    schedBin1Ref,
    schedBin2Ref,
    schedBin3Ref,
    schedBin4Ref,
    trackRecordRef,
    controls,
  } = useAnimations();

return (

<section className="Projects" ref={ref}>

  <h2 className="numbered-heading">Some Things I’ve Built</h2>
  <ul className="featured-projects">

    {/* project 1: skycast */}
    <li className="projects proj1">
      <div className="project-content">
        <div className="content-wrapper">
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title">Skycast</h3>
          <div className="project-description">
            <p>A web project that uses <span className="highlight">Weather API</span>. It offers real-time weather
              updates for
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
            {/* <a target="_blank" rel="noreferrer" href="https://etan31.github.io/skycast/">
              <svg xmlns="http://www.w3.org/2000/svg" className="new" height="24px" viewBox="0 -960 960 960"
                width="24px" fill="none" stroke="currentColor">
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
            </a> */}

          </div>
        </div>
      </div>
      <div className="project-image">
        <div className="windowPreview">
          <motion.img src={skycastImage1}  ref={skycast1Ref}  initial={{ opacity: 1 }} className="imgPreview skycast1" alt="skycast image preview" />
          {/* <img src={skycastImage} ref={skycast1Ref} className="imgPreview skycast1" alt="Skycast image preview" /> */}
        </div>
        <div className="mobilePreview">
          {/* <img src={skycastImage2} ref={skycast2Ref} className="imgPreview skycast2" alt="skycast img preview" />
          <img src={skycastImage3} ref={skycast3Ref} className="imgPreview skycast3" alt="skycast img preview" /> */}

          <motion.img src={skycastImage2} ref={skycast2Ref}  animate={controls.skycast2} initial={{ opacity: 0 }} className="imgPreview skycast2" alt="skycast image preview" />
          <motion.img src={skycastImage3} ref={skycast3Ref} animate={controls.skycast3} initial={{ opacity: 0 }} className="imgPreview skycast3" alt="skycast image preview" /> 
        </div>
      </div>
    </li>

    {/* project 2: speech2text*/}
    <li className="projects proj2">
      <div className="project-content project2Content">
        <div className="content-wrapper">
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title">Speech2Text</h3>
          <div className="project-description">This project allows you to record your speech, convert it into text,
             and save it as a `.txt` file. A school project that was developed by Arca, Dolim, Vergara, and myself.
</div>
          <ul className="project-tech-list">
            <li>Nodejs</li>
            <li>PostgreSQL</li>
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
            {/* <a target="_blank" rel="noreferrer" href="https://github.com/Etan31/Speech2Text/">
              <svg xmlns="http://www.w3.org/2000/svg" className="new" height="24px" viewBox="0 -960 960 960"
                width="24px" fill="none" stroke="currentColor">
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <div className="project-image">
        <div className="windowPreview">
          {/* <img src={stt1} ref={stt1Ref} className="imgPreview stt1" alt="Speech-to-text img preview" /> */}

          <motion.img src={stt1} ref={stt1Ref}  initial={{ opacity: 1 }} className="imgPreview stt1" />
        </div>
        <div className="mobilePreview sttMobilePreview">
          {/* <img src={stt2} ref={stt2Ref} className="imgPreview stt2" alt="Speech-to-text img preview" />
          <img src={stt3} ref={stt3Ref} className="imgPreview stt3" alt="Speech-to-text img preview" /> */}

          <motion.img src={stt2} ref={stt2Ref} animate={controls.stt2} initial={{ opacity: 0 }} className="imgPreview stt2" />
          <motion.img src={stt3} ref={stt3Ref} animate={controls.stt3} initial={{ opacity: 0 }} className="imgPreview stt3" />
        </div>
      </div>
    </li>

    {/* project 3: SchedBin*/}
    <li className="projects proj3">
      <div className="project-content project3Content">
        <div className="content-wrapper">
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title">SchedBin</h3>
          <div className="project-description">
            Designed to make managing garbage collection schedules easy, SchedBin is a straightforward web application.
            Waste management is made timely and organized with ease by admins setting collection dates and users viewing
            and updating the schedule readily.
          </div>
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
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" height="24px" width="24px" strokeLinecap="round" strokeLinejoin="round"
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
        <div className="mobilePreview schedBinMobilePreview">
          <div className="imgAbove">
            {/* <img src={SchedBin1} ref={SchedBin1Ref} className="imgPreview schedBin1" alt="SchedBin img preview" />
            <img src={SchedBin2} ref={SchedBin2Ref} className="imgPreview schedBin2" alt="SchedBin img preview" /> */}

            <motion.img  src={SchedBin1} ref={schedBin2Ref} animate={controls.schedBin2} initial={{ opacity: 0 }} className="imgPreview schedBin1" />
            <motion.img  src={SchedBin2} ref={schedBin1Ref} animate={controls.schedBin1} initial={{ opacity: 0 }} className="imgPreview schedBin2" />
          </div>
          <div className="imgBelow">
            {/* <img src={SchedBin3} ref={SchedBin3Ref} className="imgPreview schedBin3" alt="SchedBin img preview" />
            <img src={SchedBin4} ref={SchedBin4Ref} className="imgPreview schedBin4" alt="SchedBin img preview" /> */}

            <motion.img src={SchedBin3} ref={schedBin3Ref} animate={controls.schedBin3} initial={{ opacity: 0 }} className="imgPreview schedBin3" />
            <motion.img src={SchedBin4} ref={schedBin4Ref} animate={controls.schedBin4} initial={{ opacity: 0 }} className="imgPreview schedBin4" />
          </div>
        </div>
      </div>
    </li>

    {/* project 4: Portfolio /// Ongoing*/}
    <li className="projects proj4">
      <div className="project-content project4Content">
        <div className="content-wrapper">
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title">Web portfolio</h3>
          <div className="project-description">
            This personal project, which was mainly created with 
            <span className="highlight"> React, HTML, and CSS</span>, 
            presents a thorough and dynamic website that highlights my background, skills, and character traits. 
            It is intended to demonstrate my proficiency with front-end development while offering a user-friendly interface 
            that embodies my attention to detail and creativity.
          </div>
          <ul className="project-tech-list">
            <li>Node.js</li>
            <li>Git</li>
            <li>React</li>
            <li>Framer Motion</li>
            <li>EmailJS</li>
          </ul>

          <div className="project-links">
            <a target="_blank" rel="noreferrer" href="https://github.com/Etan31/TrackRecord">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" height="24px" width="24px" strokeLinecap="round" strokeLinejoin="round"
                className="feather feather-github">
                <title>GitHub</title>
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                </path>
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://tristanehrontumbaga.xyz">
              <svg xmlns="http://www.w3.org/2000/svg" className="new" height="24px" viewBox="0 -960 960 960"
                width="24px" fill="none" stroke="currentColor">
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="project-image img-container1">
        <div className="windowPreview img-wrapper1">

          {/* Change this image, fix the icon on the side bar */}
          {/* <img src={trackRecord} ref={trackRecordRef} className="imgPreview stt1" alt="Speech-to-text img preview" /> */}

          {/* <motion.div ref={trackRecordRef} animate={controls.trackRecord} initial={{ opacity: 0 }} className="trackRecord" /> */}
          <motion.img src={trackRecord} ref={trackRecordRef} initial={{ opacity: 1 }} className="trackRecord" alt="Speech-to-text image preview" />
        </div>

      </div>
    </li>

  </ul>
</section>

  );
});

export default Project;