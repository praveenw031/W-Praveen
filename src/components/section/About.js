import React from "react";
import "../../assets/css/about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-header">
          <span className="about-badge">About Me</span>

          <h2>
            Creating Digital Experiences
            <span> That People Love</span>
          </h2>

          {/* <p>
            Passionate Frontend Developer and UI/UX Designer focused on
            building modern, responsive, and user-centered digital products.
          </p> */}
        </div>

        <div className="about-content">

          {/* Left Side */}
          <div className="about-card glass-card">
            <h3>Who I Am</h3>

            <p>
              I'm a <strong>UI/UX Designer</strong> and
              <strong> Frontend Developer</strong> with hands-on experience in designing
              and developing modern, responsive, and user-friendly web applications. I
              have successfully completed <strong>20+ UI/UX Design</strong> and
              <strong> Frontend Development Projects</strong>, transforming ideas into
              clean, interactive, and visually engaging digital experiences.
            </p>

            <p>
              My technical expertise includes
              <strong> React.js</strong>,
              <strong> JavaScript</strong>,
              <strong> JSX</strong>,
              <strong> HTML5</strong>,
              <strong> CSS3</strong>,
              <strong> Bootstrap</strong>,
              <strong> Figma</strong>, and
              <strong> Adobe Photoshop</strong>, allowing me to build responsive,
              high-performance websites with a strong focus on user experience and modern
              design.
            </p>

            <p>
              I hold both a <strong>Diploma</strong> and a
              <strong> Bachelor's Degree in Electrical and Electronics Engineering</strong>,
              which has strengthened my analytical thinking and problem-solving skills.
              I also have knowledge of <strong>ETAP Software</strong> and power system
              analysis.
            </p>

            <p>
              During my academic journey, I developed a
              <strong> Solar Roof Car</strong> as my Diploma final-year project and
              completed a <strong>Load Flow Analysis using ETAP</strong> as my Bachelor's
              final-year project. I am passionate about continuously learning new
              technologies, exploring modern design trends, and creating innovative
              digital solutions that deliver meaningful user experiences.
            </p>
          </div>

          {/* Right Side */}
          <div className="about-stats">

            <div className="stat-card">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>User Focused</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;