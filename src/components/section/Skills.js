import React from "react";
import "../../assets/css/skills.css";

function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: "💻",
            skills: [
                "React JS",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "Bootstrap 5",
                "Responsive Web Design",
                "REST API Integration",
            ],
        },
        {
            title: "UI/UX Design",
            icon: "🎨",
            skills: [
                "UI Design",
                "Wireframing",
                "Prototyping",
                "User Experience Design",
                "Design Systems",
                "Mobile-First Design",
                "User-Centered Design",
            ],
        },
        {
            title: "Tools & Technologies",
            icon: "⚙️",
            skills: [
                "Figma",
                "Git",
                "GitHub",
                "Visual Studio Code",
                "Postman",
                "Chrome DevTools",
            ],
        },
        {
            title: "Professional Skills",
            icon: "🚀",
            skills: [
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Attention to Detail",
                "Time Management",
                "Continuous Learning",
                "Project Planning",
            ],
        },
    ];

    const additionalSkills = [
        "ETAP",
        "MATLAB Basics",
        "Technical Documentation",
        "Engineering Problem Solving",
    ];

    return (
        <>

            <section className="skills-section" id="skills">
                <div className="container">

                    <div className="skills-header">
                        <span className="skills-badge">Skills</span>

                        <h2>
                            Building Modern
                            <span> Digital Experiences</span>
                        </h2>

                        {/* <p>
                            A combination of frontend development, UI/UX design,
                            and engineering problem-solving skills used to create
                            impactful digital solutions.
                        </p> */}

                        <div className="skills-slider">
                            <div className="slider-track">

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="React"
                                    />
                                </div>

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        alt="JavaScript"
                                    />
                                </div>

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                        alt="HTML"
                                    />
                                </div>

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        alt="CSS"
                                    />
                                </div>

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                        alt="Bootstrap"
                                    />
                                </div>

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        alt="Git"
                                    />
                                </div>

                                {/* Duplicate for infinite loop */}

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="React"
                                    />
                                </div>

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        alt="JavaScript"
                                    />
                                </div>

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                        alt="HTML"
                                    />
                                </div>

                                <div className="logo-card">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        alt="CSS"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* <div className="skills-grid">
                        {skillCategories.map((item, index) => (
                            <div className="skill-card" key={index}>
                                <div className="skill-top">
                                    <span>{item.icon}</span>
                                    <h3>{item.title}</h3>
                                </div>

                                <div className="skill-tags">
                                    {item.skills.map((skill, i) => (
                                        <span key={i}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="extra-skills-card">
                        <h3>Additional Knowledge</h3>

                        <div className="extra-tags">
                            {additionalSkills.map((skill, i) => (
                                <span key={i}>{skill}</span>
                            ))}
                        </div>
                    </div> */}

                   <div className="skills-table-wrapper">

  <div className="skills-table">

    {skillCategories.map((item, index) => (
      <div className="skills-row" key={index}>

        <div className="skills-category">
          <span className="skill-icon">
            {item.icon}
          </span>

          <h3>{item.title}</h3>
        </div>

        <div className="skills-list">
          {item.skills.map((skill, i) => (
            <span
              className="skill-pill"
              key={i}
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    ))}

    {/* Additional Knowledge Row */}

    <div className="skills-row additional-row">

      <div className="skills-category">
        <span className="skill-icon">
          🚀
        </span>

        <h3>Additional Knowledge</h3>
      </div>

      <div className="skills-list">

        {additionalSkills.map((skill, i) => (
          <span
            className="skill-pill"
            key={i}
          >
            {skill}
          </span>
        ))}

      </div>

    </div>

  </div>

</div>

                </div>
            </section>




        </>

    );
}

export default Skills;