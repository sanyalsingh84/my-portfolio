import React, { useEffect, useRef } from "react";
import SectionAboutMe from "./SectionAboutMe";
import SectionContact from "./SectionContact";
import SectionProjects from "./SectionProjects";
import { proLineAni, proHeadAni, heroTitleAni } from "./animation";

const Content = ({ section, addSection }) => {
  let heroTitle = useRef([]);
  heroTitle.current = [];

  let proLine = useRef([]);
  proLine.current = [];

  let proHead = useRef([]);
  proHead.current = [];

  useEffect(() => {
    proLineAni(proLine);
    proHeadAni(proLine, proHead);
    heroTitleAni(heroTitle);
  }, []);

  const addHeroTitle = (el) => {
    if (el && !heroTitle.current.includes(el)) {
      heroTitle.current.push(el);
    }
  };

  const addProLine = (el) => {
    if (el && !proLine.current.includes(el)) {
      proLine.current.push(el);
    }
  };

  const addProHead = (el) => {
    if (el && !proHead.current.includes(el)) {
      proHead.current.push(el);
    }
  };

  return (
    <section className="main-content">
      <div className="container">
        <section id="home" className="hero-title">
          <h1 ref={addHeroTitle}>Frontend Web Developer</h1>
          <h1 ref={addHeroTitle}>With Backend knoweldge</h1>
          <h1 ref={addHeroTitle}>And Designing Skills.</h1>
        </section>
        <SectionProjects
          section={section}
          addSection={addSection}
          addProLine={addProLine}
          addProHead={addProHead}
        />
        <SectionAboutMe addSection={addSection} proLine={proLine} />
        <SectionContact addSection={addSection} />
      </div>
    </section>
  );
};

export default Content;
