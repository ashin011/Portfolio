import React from 'react';
import './about.css';
import CV from '../../assets/ashin-cv.pdf';
import Info from './Info';
import AboutImg from '../../assets/profile.jpg';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'></span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="profile" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            <br/>
            I'm Ashin Varghese, a Computer Science student at Amrita Vishwa Vidyapeetham, Coimbatore. I am currently
            focused on developing a strong foundation in core technical skills through academic learning and hands-on projects.
            I approach every task with attention to detail, consistency, and a commitment to delivering high-quality results.
            I value continuous growth and take pride in being reliable, well-organized, and adaptable to any environment I’m part of.
          </p>

          <a href={CV} download className="button button--flex">
            Download CV
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M15.25 22.75H9.25C3.82 22.75 1.5 20.43 1.5 15V9C1.5 3.57 3.82 1.25 9.25 1.25H14.25C14.66 1.25 15 1.59 15 2C15 2.41 14.66 2.75 14.25 2.75H9.25C4.64 2.75 3 4.39 3 9V15C3 19.61 4.64 21.25 9.25 21.25H15.25C19.86 21.25 21.5 19.61 21.5 15V10C21.5 9.59 21.84 9.25 22.25 9.25C22.66 9.25 23 9.59 23 10V15C23 20.43 20.68 22.75 15.25 22.75Z"
                fill="var(--container-color)" />
              <path d="M22.25 10.75H18.25C14.83 10.75 13.5 9.42 13.5 6V2C13.5 1.7 13.68 1.42 13.96 1.31C14.24 1.19 14.56 1.26 14.78 1.47L22.78 9.47C22.99 9.68 23.06 10.01 22.94 10.29C22.82 10.57 22.55 10.75 22.25 10.75Z"
                fill="var(--container-color)" />
              <path d="M13.25 13.75H7.25C6.84 13.75 6.5 13.41 6.5 13C6.5 12.59 6.84 12.25 7.25 12.25H13.25C13.66 12.25 14 12.59 14 13C14 13.41 13.66 13.75 13.25 13.75Z"
                fill="var(--container-color)" />
              <path d="M11.25 17.75H7.25C6.84 17.75 6.5 17.41 6.5 17C6.5 16.59 6.84 16.25 7.25 16.25H11.25C11.66 16.25 12 16.59 12 17C12 17.41 11.66 17.75 11.25 17.75Z"
                fill="var(--container-color)" />
            </svg>
          </a>
        </div>
      </div>

      <div className="about__extra container">
        <Info />
      </div>
    </section>
  );
};

export default About;
