import React from "react";
import "../Home/Profile.css";
// import Typical from "react-typical";
export default function Profile() {
  return (
    <>
      <div className=" profile-container mx-auto">
        <div className="profile-parent container">
          <div className="profile-details  ">
            <div className="colz">
              <div className="colz-icons">
                <a href="/">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="/">
                  <i className="fa fa-youtube-square"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="profile-heading">
              <h1>
                Hello,I'm<span className="profile-name"> SHOAIB</span>{" "}
              </h1>
              {/* <Typical
                loop={Infinity}
                steps={[
                  "Ethusiastic Dev",
                  1000,
                  "Full Stack Devr",
                  1000,
                  "MERN Stack Dev",
                  1000,
                  "React Dev",
                  1000,
                ]}
              /> */}
              <span className="dev-info">
                Ethusiastic Dev Full Stack Devr MERN Stack Dev React Dev
              </span>
            </div>
            <div className="btn-container">
              <button className="btn primary-btn ">Hire Me</button>
              <a href="resume1.pdf" download="cv">
                <button className="btn primary-btn highlighted-btn  ">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          <div className="profile-pic">
            <img
              src="profilephoto.jpg"
              className="profile-photo"
              alt="profile-picture"
            />
            <div className="profile-pic-background"></div>
          </div>
        </div>
        <div className="design">
          <img src="shape-bg.png" alt="could not found " />
        </div>
      </div>
    </>
  );
}
