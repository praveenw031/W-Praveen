import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";

import { FaSquarePhone } from "react-icons/fa6";

import {
  FaMoon,
  FaSun,
  FaLinkedin
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme) {

      setTheme(savedTheme);

      document.documentElement.setAttribute(
        "data-theme",
        savedTheme
      );
    }

  }, []);

  const toggleTheme = () => {

    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem(
      "theme",
      newTheme
    );
  };

  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <nav className="portfolio-navbar">

        <div className="container-fluid py-3">

          <div className="navbar-wrapper">

            {/* Logo */}

            <div className="logo">
              <a href="/">
                <h2>W Praveen</h2>
              </a>
            </div>

            {/* Desktop Menu */}

            {/* <ul className="desktop-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Skills</a></li>
              <li><a href="/">Projects</a></li>
              <li><a href="/Contact">ddddd</a></li>
            </ul> */}

            {/* Right */}

            <div className="right-section">

              <button
                className="theme-toggle"
                onClick={toggleTheme}
              >
                {
                  theme === "light"
                    ? <FaMoon />
                    : <FaSun />
                }
              </button>

              <button
                type="button"
                className="login-btn"
                onClick={() => setShowResume(true)}
              >
                Resume
              </button>

              {showResume && (
                <div
                  className="resume-modal-overlay"
                  onClick={() => setShowResume(false)}
                >
                  <div
                    className="resume-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="close-btn"
                      onClick={() => setShowResume(false)}
                    >
                      ✕
                    </button>

                    <div className="resume-header">
                      <h2>My Resume</h2>
                      {/* <p>
                        Frontend Developer & UI/UX Designer
                      </p> */}
                    </div>

                    <div className="resume-actions">

                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn primary"
                      >
                        View Resume
                      </a>

                      <a
                        href="/resume.pdf"
                        download
                        className="resume-btn secondary"
                      >
                        Download Resume
                      </a>

                    </div>

                    <iframe
                      src="/resume.pdf"
                      title="Resume Preview"
                      className="resume-frame"
                    />
                  </div>
                </div>
              )}



              <a target="_blank" rel="noopener noreferrer"
                className="demo-btn" href="https://www.linkedin.com/in/w-praveen-1ab6aa230/"
              >
                <FaLinkedin />

              </a>

              <a
                className="demo-btn" href="/Contact"
              >
                <FaSquarePhone />

              </a>

              <button
                className="hamburger"
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
              >
                ☰
              </button>

            </div>

          </div>

        </div>

      </nav>

      <div
        className={
          `mobile-menu ${menuOpen ? "active" : ""
          }`
        }
      >

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Skills</a>
        <a href="/">Projects</a>
        <a href="/Contact">Contact</a>

        <button
          className="mobile-btn"
        >
          <FaLinkedin />

        </button>

      </div>
    </>
  );
}

export default Navbar;