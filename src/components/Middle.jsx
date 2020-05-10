import React from "react";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Middle = () => {
  const [aboutShow, setAboutShow] = React.useState(false);
  const [workShow, setWorkShow] = React.useState(false);
  const [contactShow, setContactShow] = React.useState(false);
  const [slideInLeft, setSlideInLeft] = React.useState(false);
  const [slideInRight, setSlideInRight] = React.useState(false);
  const [slideInUp, setSlideInUp] = React.useState(false);

  function showwork() {
    setWorkShow(true);
    setSlideInRight(true);
    setTimeout(() => {
      setSlideInRight(false);
    }, 950);
  }
  function showabout() {
    setAboutShow(true);
    setSlideInLeft(true);
    setTimeout(() => {
      setSlideInLeft(false);
    }, 950);
  }
  function showcontact() {
    setContactShow(true);
    setSlideInUp(true);
    setTimeout(() => {
      setSlideInUp(false);
    }, 950);
  }

  return (
    <div>
      <div>
        <a
          id="about"
          onClick={showabout}
          className="animated fadeIn"
          style={{ animationDelay: "2.2s" }}
        >
          about
        </a>
        <a
          id="work"
          onClick={showwork}
          className="animated fadeIn"
          style={{ animationDelay: "2.2s" }}
        >
          work
        </a>
        <a
          id="contact"
          onClick={showcontact}
          className="animated fadeIn"
          style={{ animationDelay: "2.2s" }}
        >
          contact
        </a>

        <div
          id="middle"
          className="animated slideInDown"
          style={{ animationDelay: "2.0s" }}
        >
          <h1>Leonid Sorkin</h1>
          <div id="menu">
            <a onClick={showabout}>about</a>
            <a onClick={showwork}>work</a>
            <a onClick={showcontact}>contact</a>
          </div>
          <table>
            <tbody>
              <tr>
                <td
                  className="animated zoomIn"
                  style={{ animationDelay: "2.2s" }}
                >
                  <a className="social">
                    <i className="fab fa-facebook" />
                  </a>
                </td>
                <td
                  className="animated zoomIn"
                  style={{ animationDelay: "2.4s" }}
                >
                  <a className="social">
                    <i className="fab fa-twitter" />
                  </a>
                </td>
                <td
                  className="animated zoomIn"
                  style={{ animationDelay: "2.6s" }}
                >
                  <a className="social">
                    <i className="fab fa-instagram" />
                  </a>
                </td>
                <td
                  className="animated zoomIn"
                  style={{ animationDelay: "2.8s" }}
                >
                  <a className="social">
                    <i className="fab fa-dribbble" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <About
        slideInLeft={slideInLeft}
        showAbout={aboutShow}
        setShowFalse={() => setAboutShow(false)}
      />
      <Work
        slideInRight={slideInRight}
        showWork={workShow}
        setShowFalse={() => setWorkShow(false)}
      />
      <Contact
        slideInUp={slideInUp}
        showContact={contactShow}
        setShowFalse={() => setContactShow(false)}
      />
    </div>
  );
};

export default Middle;
