import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../assets/css/internshipData.css";

const internships = [
  {
    id: 1,
    icon: "⚡",
    company: "Power Projects",
    role: "Internship Trainee",
    duration: "December 2023 - January 2024",
    description:
      "Performed ETAP simulations, evaluated voltage and current profiles, conducted load flow analysis, and studied power system behavior under varying conditions.",
    skills: [
      "ETAP",
      "Load Flow Analysis",
      "Voltage Analysis",
      "Power Systems",
      "Network Analysis",
    ],
  },

  {
    id: 2,
    icon: "🏭",
    company: "Salem Steel Plant",
    role: "Industrial Internship",
    duration: "1 Week",
    description:
      "Observed industrial electrical operations, manufacturing processes, power distribution infrastructure, and industrial safety practices.",
    skills: [
      "Automation",
      "Manufacturing",
      "Electrical Systems",
      "Power Distribution",
      "Industrial Safety",
    ],
  },

  {
    id: 3,
    icon: "🌐",
    company: "Nextgen Instruments",
    role: "IoT Internship",
    duration: "June 2023 - July 2023",
    description:
      "Studied IoT fundamentals, sensor integration, communication systems, and embedded engineering applications.",
    skills: [
      "IoT",
      "Sensors",
      "Embedded Systems",
      "Monitoring",
      "Communication Systems",
    ],
  },
];

function InternshipData() {
  return (
    <section className="internship-section" id="internship">
      <div className="container">

        <div className="internship-header">
          <span className="internship-badge">
            Internship Experience
          </span>

          <h2>
            Industrial Training &
            <span> Internships</span>
          </h2>

          <p>
            Practical exposure gained through industrial visits,
            power system training, and IoT-based engineering
            applications.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
        >
          {internships.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="internship-card">

                <div className="card-top">

                  <div className="company-icon">
                    {item.icon}
                  </div>

                  <span className="duration">
                    {item.duration}
                  </span>

                </div>

                <h3>{item.company}</h3>

                <h4>{item.role}</h4>

                <p>{item.description}</p>

                <div className="skills-wrapper">
                  {item.skills.map((skill, index) => (
                    <span key={index}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default InternshipData;