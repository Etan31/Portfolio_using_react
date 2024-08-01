import React from 'react';

const Project = React.forwardRef((props, ref) => {
  return (
    <section className="Projects" ref={ref}>
      <h1>hello Project</h1>
      <ul className="featured-projects">

        {/* project 1 */}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">Skycast</h3>
              <p className="project-description">SkyCast is a web project that offers real-time weather updates for
                your current location or a searched location, featuring a 5-day forecast, air quality index, humidity,
                pressure, and more.</p>
              <ul className="project-tech-list">
                <li>JavaScript (ES6+)</li>
                <li>OpenWeatherMap API</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="project-links">

                <a target="_blank" rel="noreferrer" href="https://github.com/Etan31/skycast">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
          <div className="project-image"></div>
        </li>

        {/* project 2 */}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">Speech2Text</h3>
              <div className="project-description"></div>
              <ul className="project-tech-list"></ul>
              <div className="project-links"></div>
            </div>
          </div>
          <div className="project-image"></div>
        </li>

        {/* project 3 */}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">SchedBin</h3>
              <div className="project-description"></div>
              <ul className="project-tech-list">
                <ul>
                  <li class="tech-list">Java</li>
                  <li class="tech-list">Firebase</li>
                  <li class="tech-list">GCP</li>
                  <li class="tech-list">Git</li>
                  <li class="tech-list">Postman</li>
                </ul>

              </ul>
              <div className="project-links">
                <a target="_blank" rel="noreferrer"
                  href="https://github.com/Etan31/SchedBin-Scheduler-for-Garbage-Collection-">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
          <div className="project-image"></div>
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