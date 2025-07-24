import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container">
        {/* Left: Contact Info */}
        <div className="contact__left">
          <div className="contact__card">
            <i className="uil uil-phone contact__card-icon"></i>
            <h3 className="contact__card-title">Phone</h3>
            <span className="contact__card-data">+91 9995284466</span>
          </div>

          <div className="contact__card">
            <i className="uil uil-envelope contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">ashinv101@gmail.com</span>
          </div>
        </div>

        {/* Separator Line */}
        <div className="contact__divider"></div>

        {/* Right: Contact Form */}
        <div className="contact__right">
          <form className="contact__form">
            <div className="contact__form-group">
              <label className="contact__label">Name</label>
              <input
                type="text"
                className="contact__input"
                placeholder="Your Name"
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__label">Email</label>
              <input
                type="email"
                className="contact__input"
                placeholder="Your Email"
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__label">Message</label>
              <textarea
                className="contact__input"
                rows="4"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
