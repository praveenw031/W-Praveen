import React from "react";
import "../assets/css/home.css";
import About from "../components/section/About";
import Skills from "../components/section/Skills";
import ProjectsData from "../components/section/ProjectsData";
import Internship from "../components/section/InternshipData";
import InternshipData from "../components/section/InternshipData";
import Education from "../components/section/Education";

function Home() {

  return (
    <>
      <About/>
       <Skills/>
      <Education/>
      <InternshipData/>
      <ProjectsData/>
    </>
  );
}

export default Home;