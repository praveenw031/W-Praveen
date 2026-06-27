import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../assets/css/projectsdata.css";
import brandico from "../../assets/images/brandico.png";

const project1 = brandico;

const project2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaMnq7UwT3-TF9TnCu-Gs2-5KsE1RqnIA8TxqE6r_OSYseMF2zDTa7nI&s=10";

const project3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzJ0Z5R5DUIiGa_kNnQPuPrTLARbHbjemN87mq9xQMQznx8Ugb6WP3EDB&s=10";

const projects = [
  {
    id: 1,
    image: project1,
    category: "Freelance Web Development",
    title: "Advertising Agency Website",
    description:
      "Designed and developed a modern, responsive website for an advertising agency using React.js and Next.js. The project focused on creating a visually engaging user experience, fast performance, and a scalable frontend architecture while effectively showcasing the agency's branding, creative services, and digital marketing solutions.",
    technologies: [
      "React.js",
      "Next.js",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    features: [
      "Responsive UI Design",
      "Creative Agency Branding",
      "Fast Performance",
      "SEO-Friendly Pages",
      "Modern Component Architecture",
      "Cross-Device Compatibility",
    ],
    liveLink: "#",
  },

  // {
  //   id: 2,
  //   image: project2,
  //   category: "Frontend Development",
  //   title: "Modern React Dashboard",
  //   description:
  //     "Created a responsive dashboard with analytics, user management, and modern UI components using React and Bootstrap.",
  //   technologies: [
  //     "React JS",
  //     "Bootstrap",
  //     "JavaScript",
  //     "Responsive Design",
  //   ],
  //   features: [
  //     "Analytics Dashboard",
  //     "Responsive Layout",
  //     "User Management",
  //     "Dark Mode",
  //   ],
  //   liveLink: "#",
  // },

  // {
  //   id: 3,
  //   image: project3,
  //   category: "UI/UX Design",
  //   title: "Creative Portfolio Website",
  //   description:
  //     "Designed and developed a professional portfolio website with modern animations and responsive layouts.",
  //   technologies: [
  //     "React JS",
  //     "CSS3",
  //     "Bootstrap",
  //     "UI Design",
  //   ],
  //   features: [
  //     "Modern UI",
  //     "Responsive Design",
  //     "Smooth Animations",
  //     "Portfolio Showcase",
  //   ],
  //   liveLink: "#",
  // },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-left" onClick={onClick}>
      ❮
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-right" onClick={onClick}>
      ❯
    </button>
  );
};

function ProjectsData() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="projects-badge">
            Freelance Project
          </span>

          <h2>
            Recent <span>Freelance Work</span>
          </h2>

          {/* <p>
            A collection of modern, responsive, and high-performance websites developed for clients, focusing on branding, user experience, and business growth using React.js and Next.js.
          </p> */}
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          showDots={true}
          pauseOnHover={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          containerClass="projects-carousel"
        >
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  {project.features.map((feature, index) => (
                    <div
                      className="feature-item"
                      key={index}
                    >
                      ✓ {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={project.liveLink}
                  className="project-link"
                >
                  View Live Website →
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ProjectsData;