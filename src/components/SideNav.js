import React from "react";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <div className="side-links">
        <ul className="side-links-ul">
          <span>
            <li className="side-links-item">
              <a href="# ">About</a>
            </li>
          </span>

          <span>
            <li className="side-links-item">
              <a href="# ">Projects</a>
            </li>
          </span>

          <span>
            <li className="side-links-item">
              <a href="# ">Contact</a>
            </li>
          </span>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
