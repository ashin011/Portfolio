import React from 'react';
import "./about.css";

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <h3 className="about__title" >Education</h3>
        <p className="about__subtitle">B.Tech in Computer Science</p>
        <p className="about__subtitle">Amrita Vishwa Vidyapeetham, Coimbatore</p>
      </div>

      <div className="about__box">
        <h3 className="about__title">Projects</h3>
        <ul className="about__subtitle">
          <li>AI Voicebot with Emotion Detection</li>
          <li>Smart Airport Behaviour Tracker</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
