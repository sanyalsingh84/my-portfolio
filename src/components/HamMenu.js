import React, { useState, useRef, useEffect } from "react";
import { close, openAni } from "./animation";
import gsap from "gsap";

const HamMenu = ({ addHeadItems }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });
  let navToggle = useRef(null);
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      });
    }
  };

  const hadnleNavClose = () => {
    setState({
      clicked: !state.clicked,
    });
  };

  useEffect(() => {
    if (state.clicked === false) {
      // close nav-toggle
      gsap.to([li1, li2, li3], {
        duration: 0,
        y: 0,
      });
      close(navToggle, li1, li2, li3);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open nav-toggle
      gsap.to([li1, li2, li3], {
        duration: 0,
        y: 0,
      });
      openAni(navToggle, li1, li2, li3);
    }
  }, [state]);

  return (
    <>
      <div ref={addHeadItems} className="ham-menu" onClick={handleMenu}>
        <div id="nav-icon1" className={state.clicked ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav
        className="nav-toggle"
        ref={(el) => {
          navToggle = el;
        }}>
        <div className="nav-links">
          <ul className="nav-links-ul">
            <span>
              <li
                onClick={hadnleNavClose}
                ref={(el) => {
                  li1 = el;
                }}
                className="link-items">
                <a href="#project0">Project</a>
              </li>
            </span>

            <span>
              <li
                onClick={hadnleNavClose}
                ref={(el) => {
                  li2 = el;
                }}
                className="link-items">
                <a href="#about1">About Me</a>
              </li>
            </span>

            <span>
              <li
                onClick={hadnleNavClose}
                ref={(el) => {
                  li3 = el;
                }}
                className="link-items">
                <a href="#contact">Contact</a>
              </li>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HamMenu;
