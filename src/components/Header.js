import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { close, openAni } from "./animation";

const Header = () => {
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
      console.log(1);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      });
      console.log(2);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      });
      console.log(3);
    }
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
      <nav className="navbar">
        <div className="brand-title">
          <h1>SS</h1>
        </div>
        <div className="ham-menu" onClick={handleMenu}>
          <div id="nav-icon1" className={state.clicked ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <nav
        className="nav-toggle"
        ref={(el) => {
          navToggle = el;
        }}>
        <div className="nav-links">
          <ul className="nav-links-ul">
            <span>
              <li
                ref={(el) => {
                  li1 = el;
                }}
                className="link-items">
                <a href="# ">About</a>
              </li>
            </span>

            <span>
              <li
                ref={(el) => {
                  li2 = el;
                }}
                className="link-items">
                <a href="# ">Projects</a>
              </li>
            </span>

            <span>
              <li
                ref={(el) => {
                  li3 = el;
                }}
                className="link-items">
                <a href="# ">Contact</a>
              </li>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
