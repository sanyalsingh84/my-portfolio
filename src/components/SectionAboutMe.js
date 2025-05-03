import React, { useEffect, useRef } from "react";
import { aboutHeadAni, aboutSecAni } from "./animation";

const SectionAboutMe = ({ proLine, addSection }) => {
  let aboutSec = useRef(null);
  let aboutImage = useRef(null);
  let aboutHead = useRef(null);
  let aboutTitle = useRef(null);
  let aboutLine = useRef(null);
  let aboutDisc = useRef(null);

  useEffect(() => {
    aboutHeadAni(aboutHead, proLine);
    aboutSecAni(aboutSec, aboutImage, aboutTitle, aboutLine, aboutDisc);
  });
  return (
    <section ref={addSection} id="about1" className="about">
      <div className="projects-title">
        <h1
          ref={(el) => {
            aboutHead = el;
          }}>
          About ME
        </h1>
      </div>
      <article
        id="pro-about"
        className="pro-one"
        ref={(el) => {
          aboutSec = el;
        }}>
        <div className="project-title">
          <div className="heading left">
            <h1
              ref={(el) => {
                aboutTitle = el;
              }}>
              Sanyal Singh
            </h1>
            <div
              className="about-line"
              ref={(el) => {
                aboutLine = el;
              }}></div>
            <div
              className="disc-about hide"
              ref={(el) => {
                aboutDisc = el;
              }}>
              <h2>Software Engineer with over 3 years of professional experience, working on both frontend and backend development. On the frontend, I’ve built responsive user interfaces and dashboards using JavaScript and React. On the backend, I’ve contributed to building and maintaining systems with PHP, Laravel, and MySQL. I enjoy creating user-friendly solutions and thrive in collaborative environments where I can continue to learn and grow.
              </h2>
            </div>
          </div>
        </div>
        <div
          className="project-image image-5"
          ref={(el) => {
            aboutImage = el;
          }}></div>
        <div className="disc-about show">
          <h2>
            I am a web developer who’s in fourth semester of bachelor in
            computer application degree. My friend got me into the world of web
            development, I got instantly fascinated by it and then I decided to
            pursue it. Since then, I've been trying to learn new technologies so
            I can get closer to get a job in this field.
          </h2>
        </div>
      </article>
    </section>
  );
};

export default SectionAboutMe;
