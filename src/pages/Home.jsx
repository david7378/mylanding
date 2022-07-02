import React from "react";
import AboutMe from "../components/aboutme/AboutMe";
import Hero from "../components/hero/Hero";
import ProjectsRow from "../components/project/ProjectsRow";
import Toolbox from "../components/toolbox/Toolbox";

const Home = () => {
  return (
    <>
      <Hero id="home" />
      <ProjectsRow title={"My Projects"} rowID={1} />
      <Toolbox title={"My Toolbox"} rowID={2} />
      <AboutMe id="aboutme" />
    </>
  );
};

export default Home;
