import { Main } from "./components";
import logo from "./images/logo.png";
import HamMenu from "./components/HamMenu";
import { useEffect, useRef } from "react";
import { headItemsAni } from "./components/animation";
import gsap from "gsap";

function App() {
  let app = useRef(null);

  let headItems = useRef([]);
  headItems.current = [];

  useEffect(() => {
    gsap.to(app, {
      duration: 0,
      css: { visibility: "visible" },
    });
    headItemsAni(headItems);
  }, []);

  const addHeadItems = (el) => {
    if (el && !headItems.current.includes(el)) {
      headItems.current.push(el);
    }
  };

  return (
    <div
      ref={(el) => {
        app = el;
      }}
      className="app">
      <div ref={addHeadItems} className="logo">
        <a href="#home">
          <img src={logo} alt="two S alphabet" />
        </a>
      </div>
      <HamMenu addHeadItems={addHeadItems} />
      <Main />
    </div>
  );
}

export default App;
