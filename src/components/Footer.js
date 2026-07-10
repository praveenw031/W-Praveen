import React from "react";
import "../../src/assets/css/footer.css";

import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaRedditAlien } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      {/* Desktop Footer */}

      <footer className="desktop-footer">

        <a href="mailto:praveenw031@gmail.com">
          <SiGmail />
        </a>

        <a
          href="https://github.com/praveenw031"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a href="/">
          <FaXTwitter />

        </a>

        <a href="/Contact">
          <FaPhoneAlt />

        </a>

        <a href="/">
          <FaRedditAlien />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/w-praveen-1ab6aa230">
          <FaLinkedin />
        </a>

      </footer>

      {/* Mobile Footer */}

      <div className="mobile-footer">

        <a href="mailto:praveenw031@gmail.com">
          <SiGmail />
        </a>

        <a
          href="https://github.com/praveenw031"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a href="/Contact">
          <FaPhoneAlt />
        </a>

        <a
          href="https://www.linkedin.com/in/w-praveen-1ab6aa230"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="/Contact">
          <FaXTwitter />
        </a>

      </div>
    </>
  );
}

export default Footer;