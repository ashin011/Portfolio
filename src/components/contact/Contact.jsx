import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle"></span>

      <div className="contact__container container grid">
        <div className="contact__options">

          <a href="tel:‪+919995284466‬" className="contact__card" target="_blank" rel="noreferrer">
            <i className="uil uil-phone contact__icon"></i>
            <h3 className="contact__title">Phone</h3>
            <span className="contact__data">‪+91 9995284466‬</span>
          </a>

          <a href="mailto:ashinv101@gmail.com" className="contact__card" target="_blank" rel="noreferrer">
            <i className="uil uil-envelope contact__icon"></i>
            <h3 className="contact__title">Email</h3>
            <span className="contact__data">ashinv101@gmail.com</span>
            
          </a>

        
          <a href="https://www.linkedin.com/in/ashin-varghese-471019364/" className="contact__card" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin contact__icon"></i>
            <h3 className="contact__title">LinkedIn</h3>
            <span className="contact__data">linkedin.com/in/ashin-varghese</span>
          </a>

          <a href="https://www.instagram.com/_ashin._.varghese_/" className="contact__card" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram contact__icon"></i>
            <h3 className="contact__title">Instagram</h3>
            <span className="contact__data">_ashin._.varghese_</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;