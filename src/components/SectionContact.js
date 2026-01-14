import React, { useEffect, useRef } from "react";
import { contactAni } from "./animation";

const SectionContact = ({ addSection }) => {
  let contactSec = useRef(null);
  let contactHead = useRef(null);
  let contactLink = useRef(null);
  let contactLine = useRef(null);
  let contactMedia = useRef(null);

  useEffect(() => {
    contactAni(contactSec, contactHead, contactLink, contactLine, contactMedia);
  }, []);

  return (
    <section
      id="contact"
      className="contact"
      ref={(el) => {
        contactSec = el;
      }}
    >
      <div ref={addSection} className="project-title">
        <div className="heading">
          <h2
            ref={(el) => {
              contactHead = el;
            }}
          >
            CONTACT ME
          </h2>
          <a
            ref={(el) => {
              contactLink = el;
            }}
            className="email-link"
            href="mailto:sanyalsingh84@gmail.com"
          >
            sanyalsingh84@gmail.com
          </a>
        </div>
        <div
          ref={(el) => {
            contactLine = el;
          }}
          className="projects-line"
        ></div>
        <div
          ref={(el) => {
            contactMedia = el;
          }}
          className="social-links"
        >
          <a href="https://www.linkedin.com/in/sa9yal/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/sanyalsingh84" target="_blank">
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
