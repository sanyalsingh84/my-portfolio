import React, { useRef } from "react";
import SideNav from "./SideNav";
import Content from "./Content";

const Main = () => {
  let section = useRef([]);
  section.current = [];

  const addSection = (el) => {
    if (el && !section.current.includes(el)) {
      section.current.push(el);
    }
  };

  return (
    <>
      <SideNav section={section} />
      <Content addSection={addSection} section={section} />
    </>
  );
};

export default Main;
