import React from "react";
import SectionProjects from "./SectionProjects";

const Content = () => {
  return (
    <section className="main-content">
      <div className="container">
        <section className="hero-title">
          <h1>
            Frontend Web Developer With Backend knoweldge And Designing Skills.
          </h1>
        </section>
        <div className="projects-line"></div>
        <SectionProjects />
      </div>
    </section>
  );
};

export default Content;
