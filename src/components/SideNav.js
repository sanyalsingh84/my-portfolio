import React, { useEffect, useRef } from "react";
import { navItemAni, navScroll } from "./animation";

const SideNav = ({ section }) => {
  let navItem = useRef([]);
  navItem.current = [];

  let navSpan = useRef([]);
  navSpan.current = [];

  useEffect(() => {
    navItemAni(navItem);
    navScroll(navSpan, section);
  }, []);

  const addNavItem = (el) => {
    if (el && !navItem.current.includes(el)) {
      navItem.current.push(el);
    }
  };

  const addNavSpan = (el) => {
    if (el && !navSpan.current.includes(el)) {
      navSpan.current.push(el);
    }
  };

  return (
    <nav className="side-nav">
      <div className="side-links">
        <ul className="side-links-ul">
          <span>
            <li ref={addNavItem} className="side-links-item">
              <a href="#project0">projects</a>
              <span ref={addNavSpan}></span>
            </li>
          </span>

          <span>
            <li ref={addNavItem} className="side-links-item">
              <a href="#about1">about me</a>
              <span ref={addNavSpan}></span>
            </li>
          </span>

          <span>
            <li ref={addNavItem} className="side-links-item">
              <a href="#contact">contact</a>
              <span ref={addNavSpan}></span>
            </li>
          </span>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
