import React, { useState } from "react";

const WorkTabs = () => {
  const [showProjects, setShowProjects] = useState(false);
  const clickHandlerProjects = () => {
    setShowProjects(true);
  };
  const clickHandlerWork = () => {
    setShowProjects(false);
  };
  return (
    <div>
      <div className="button_elements">
        <button className={`btn_one ${showProjects === false?"btn_active":null}`} onClick={clickHandlerWork}>
          Projects
        </button>
        <button className={`btn_one ${showProjects === true?"btn_active":null}`} onClick={clickHandlerProjects}>
          Work
        </button>
      </div>
      <div
        className={`animated  ${
          showProjects === false ? "fadeOut hidden" : "fadeIn"
        }`}
        id="projects"
      >
        <h1>works.</h1>
        <section>
          <h2>work title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div id="used">
            <div>
              <i className="fas fa-circle" />
              &nbsp;HTML5
            </div>
            <div>
              <i className="fas fa-circle" />
              &nbsp;CSS3
            </div>
            <div>
              <i className="fas fa-circle" />
              &nbsp;Javascript
            </div>
          </div>
          <button className="btn_one">button 1</button>
          <button className="btn_two">button 2</button>
        </section>
      </div>
      <div
        className={`animated  ${
          showProjects ? "fadeOut hidden" : "fadeIn"
        }`}
        id="workId"
      >
        <h1>Projects</h1>
        <section>
          <h2>work title</h2>
          <p>
            Projects
          </p>
          <div id="used">
            <div>
              <i className="fas fa-circle" />
              &nbsp;HTML5
            </div>
            <div>
              <i className="fas fa-circle" />
              &nbsp;CSS3
            </div>
            <div>
              <i className="fas fa-circle" />
              &nbsp;Javascript
            </div>
          </div>
          <button className="btn_one">button 1</button>
          <button className="btn_two">button 2</button>
        </section>
      </div>
    </div>
  );
};

export default WorkTabs;
