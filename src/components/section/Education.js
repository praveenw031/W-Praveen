import React from "react";
import "../../assets/css/education.css";

import kprImage from "../../assets/images/kpr.jpeg";
import tpcImage from "../../assets/images/tpt.jpeg";

function Education() {
  const educationData = [
    {
      id: 1,
      image: kprImage,
      degree: "B.E. Electrical & Electronics Engineering",
      college: "KPR Institute of Engineering and Technology",
      location: "Coimbatore",
      score: "CGPA 7.5",
      duration: "2022 - 2025",
    },

    {
      id: 2,
      image: tpcImage,
      degree: "Diploma in Electrical Engineering",
      college: "Thiagarajar Polytechnic College",
      location: "Salem",
      score: "89%",
      duration: "2019 - 2022",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">

        <div className="education-header">
          <span className="education-badge">
            Education
          </span>

          <h2>
            Academic
            <span> Journey</span>
          </h2>

          <p>
            My educational background that built my engineering
            knowledge, analytical thinking, and technical expertise.
          </p>
        </div>

        <div className="education-grid">

          {educationData.map((item) => (
            <div
              className="education-card"
              key={item.id}
            >

              <div className="education-image">
                <img
                  src={item.image}
                  alt={item.college}
                />
              </div>

              <div className="education-content">

                <span className="education-duration">
                  {item.duration}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.college}</h4>

                <p>{item.location}</p>

                <div className="education-footer">
                  <div className="score-card">
                    {item.score}
                  </div>

                  <button className="education-btn">
                    View Details
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;