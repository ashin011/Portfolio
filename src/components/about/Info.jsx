import React from 'react';
import './project.css';

const Info = () => {
return (
    <div className="about__info">

      <div className="about__box">
        <h3 className="about__title">Education</h3>
        <div className="education__container">

    <div className="education__card">
      <i className="uil uil-graduation-cap education__icon"></i>
      <h4 className="education__degree">B.Tech in Computer Science and Engineering</h4>
      <p className="education__institute">Amrita Vishwa Vidyapeetham, Coimbatore</p>
      <p className="education__details">2023 - Present</p>
    </div>

    {/* Education Card 2 - Higher Secondary */}
    <div className="education__card">
      <i className="uil uil-books education__icon"></i>
      <h4 className="education__degree">Higher Secondary Education</h4>
      <p className="education__institute">Rajagiri Higher Secondary School, Kalamassery</p>
      <p className="education__details">2021 - 2023</p>
    </div>

    {/* Education Card 3 - Secondary */}
    <div className="education__card">
      <i className="uil uil-notebooks education__icon"></i>
      <h4 className="education__degree">Secondary Education</h4>
      <p className="education__institute">Rajagiri Jeevass CMI Central School, Aluva</p>
      <p className="education__details">2011 - 2021</p>
    </div>

    </div>
  </div>

<br/>
  <div className="about__box">
    <h3 className="about__title">Projects</h3>

    <section className="project section" id="project">
      <div className="project__container container grid">
        {/* Project 1 */}
        <div className="project__card">
         <i className="uil uil-smile services__icon"></i>
          <h3 className="project__title">Emotion Detector</h3>
          <p className="project__desc">
            <br/>
            I have done an emotion detector project which captures the emotion of a person through webcam and displays it using 2D avatars.
          </p>
          <br />
          <ul className="project__list">
            <li>Developed in Python</li>
            <br />
            <li>Libraries used: OpenCV, FER, NumPy, Base64, Django</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="project__card">
          <i className="uil uil-schedule services__icon"></i>
          <h3 className="project__title">Employee Leave Application</h3>
          <p className="project__desc">
            I am developing a web-based application to manage employee leave requests with secure admin control and department-based tracking.
          </p>
          <br />
          <ul className="project__list">
            <li>Built using Python and .NET Razor Pages</li>
            <br />
            <li>Database: MySQL</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="project__card">
        <i className="uil uil-capsule services__icon"></i>
        <h3 className="project__title">MediKart</h3>
        <p className="project__desc">
          <br/>
          I am developing a full-stack online medical store that reads uploaded prescriptions and ensures safe delivery of medicines to customers.
        </p>
        <ul className="project__list">
              
          <li>Built using ReactJS, NodeJS, ExpressJS</li>
          <br/>
          <li>Database: MongoDB and Firebase</li>
        </ul>
        </div>

      </div>
    </section>
  </div>

<br/>
  <div className="about__box">
    <h3 className="about__title">Internships</h3>
    <div className="education__container">

      <div className="education__card">
        <i className="uil uil-briefcase-alt education__icon"></i>
        <h4 className="education__degree">CIAL</h4>
        <p className="education__institute">Completed a one-month project in the IT Department at<br></br> Cochin International Airport.</p>
        <p className="education__details">May 2025 - June 2025</p>
      </div>

    </div>
  </div>

</div>
);
};

export default Info;
