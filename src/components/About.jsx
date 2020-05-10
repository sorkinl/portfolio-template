import React from 'react';
import classNames from "classnames";

const About = ({showAbout, setShowFalse, slideInLeft}) => {
  const [animated, setAnimated] = React.useState(false);
  const closeabout = () =>{
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
      setShowFalse()
    },950);
}
    return(<div id="about_container" className={classNames("container",{
      animated:animated || slideInLeft,
      slideOutLeft:animated,
      slideInLeft: slideInLeft
    })}
    style={showAbout?{display: 'inherit'}:{display:'none'}}
    >
    <div onClick={closeabout}><i className="fas fa-angle-left" /></div>
    <h1>about.</h1>
    <section>
      <h2>about me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
    <section>
      <h2>skills</h2>
      <p>
        i do eveything ;)
      </p>
    </section>
  </div>)
}

export default About;