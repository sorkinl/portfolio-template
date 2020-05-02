import React from "react";
import $ from 'jquery';

const Middle = () => {

    function showwork(){
        $("#work_container").css("display","inherit");
        $("#work_container").addClass("animated slideInRight");
        setTimeout(function(){
            $("#work_container").removeClass("animated slideInRight");
        },800);
        console.log("Button");
    }
    function showabout(){
        $("#about_container").css("display","inherit");
        $("#about_container").addClass("animated slideInLeft");
        setTimeout(function(){
            $("#about_container").removeClass("animated slideInLeft");
        },800);
    }
    function showcontact(){
        $("#contact_container").css("display","inherit");
        $("#contact_container").addClass("animated slideInUp");
        setTimeout(function(){
            $("#contact_container").removeClass("animated slideInUp");
        },800);
    }
    
  return (
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
  );
};

export default Middle;
