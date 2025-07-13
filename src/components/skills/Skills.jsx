import React from "react";
import "./skills.css";

const skills = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Haskell", icon: "devicon-haskell-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "ReactJS", icon: "devicon-react-original colored" },
];


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Programming Languages </span>

      <div className="skills__container container grid">
        {skills.map((skill, index) => (
          <div className="skills__card" key={index}>
            <div className="skills__icon-box">
              <i className={`${skill.icon} skills__icon`}></i>
            </div>
            <p className="skills__name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
