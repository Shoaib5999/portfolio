import React from "react";
import "../About/AboutMe.css";
export default function AboutMe() {
  return (
    <>
      <div className="About-container-main">
        <div className="About-container-parent">
          <div className="intro">
            <div className="heading">
              <h1 className="d-flex" id="aboutId" >About Me</h1>
            </div>
            <div className="heading-quote">
              <p>Why Choose Me?</p>
            </div>
          </div>
          <div className="aboutMe-section ">
            <div className="myPhoto-section">
              <div className="myPhoto"></div>
            </div>
            <div className="aboutMe-details">
              {" "}
             
              <div className="aboutMe-paragraph">
                Full stack web developer with background knowledge of MERN
                stacks with react,along with efficiency of building good
                websites.I have also better understanding of java with data
                structure and algorithm .I want to join in such company where i
                can develop more of my abilities
              </div>
              <div className="aboutMe-highlights">
                <h5>Here are A Few Highlights: </h5>
                <ul>
                  <li>Full stack web and mobile development</li>
                  <li>Interactive Front End as per the design</li>
                  <li>React with frame Work library</li>
                  <li>Building REST API</li>
                  <li>Managing database</li>
                </ul>
              </div>
              <div className="buttons">
                <button className="btn btn-dark">Hire Me</button>
                <button className="btn highlighted-btn" >Get Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
