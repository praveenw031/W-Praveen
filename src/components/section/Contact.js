import React from "react";
import "../../assets/css/Contact.css";

import profile from "../../assets/images/meimg.png";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">

      <div className="container">

         <div className="about-header">
          <span className="about-badge">Contact Me</span>

          <h2>
            Let's Build Something <br></br>
            <span>Amazing Together</span>
          </h2>

          {/* <p>
            Passionate Frontend Developer and UI/UX Designer focused on
            building modern, responsive, and user-centered digital products.
          </p> */}
        </div>

        <div className="contact-grid">

          {/* ==========================
                LEFT SIDE
          =========================== */}

          <div className="contact-form-card">

            <span className="contact-tag">
              Get in Touch
            </span>

            <h2>
              Let's Chat,
              
              Reach Out
              
              to Us
            </h2>

            {/* <p>
              Have questions or feedback? We're here to help.
              Send us a message, and we'll respond within
              24 hours.
            </p> */}

            <div className="divider"></div>

            <form>

              <div className="double-input">

                <div className="input-box">

                  <label>
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                  />

                </div>

                <div className="input-box">

                  <label>
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                  />

                </div>

              </div>

              <div className="input-box">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Email address"
                />

              </div>

              <div className="input-box">

                <label>
                  Message
                </label>

                <textarea
                  rows="7"
                  placeholder="Leave us message"
                ></textarea>

              </div>

              <div className="policy">

                <input
                  type="checkbox"
                  id="policy"
                />

                <label htmlFor="policy">
                  I agree to our friendly
                  <span> privacy policy</span>
                </label>

              </div>

              <button
                type="submit"
                className="send-btn"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

          {/* ==========================
                RIGHT SIDE
          =========================== */}

          <div className="contact-right">

            <div className="contact-image">

              <img
                src={profile}
                alt="Praveen"
              />

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FaEnvelope />
              </div>

              <div className="info-content">

                <h4>Email</h4>

                <p>
                  praveenw031@gmail.com
                </p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FaPhoneAlt />
              </div>

              <div className="info-content">

                <h4>Phone</h4>

                <p>
                  +91 93605 08065
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;