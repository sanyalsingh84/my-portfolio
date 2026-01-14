import React, { useEffect, useRef } from "react";
import { projectAni, projectAni2 } from "./animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionProjects = ({ addProLine, addProHead, section, addSection }) => {
  gsap.registerPlugin(ScrollTrigger);

  let article = useRef([]);
  article.current = [];

  let article2 = useRef([]);
  article2.current = [];

  let image = useRef([]);
  image.current = [];
  let image2 = useRef([]);
  image2.current = [];

  let heading = useRef([]);
  heading.current = [];
  let heading2 = useRef([]);
  heading2.current = [];

  let line = useRef([]);
  line.current = [];
  let line2 = useRef([]);
  line2.current = [];

  let disc = useRef([]);
  disc.current = [];
  let disc2 = useRef([]);
  disc2.current = [];

  // let h21 = useRef(null);
  // let h22 = useRef(null);
  // let proLine = useRef(null);
  // let image2 = useRef(null);

  useEffect(() => {
    projectAni(article, image, heading, line, disc);
    projectAni2(article2, image2, heading2, line2, disc2);
  }, []);

  const addArticles = (el) => {
    if (el && !article.current.includes(el)) {
      article.current.push(el);
    }
  };

  const addArticles2 = (el) => {
    if (el && !article2.current.includes(el)) {
      article2.current.push(el);
    }
  };

  const addImage = (el) => {
    if (el && !image.current.includes(el)) {
      image.current.push(el);
    }
  };

  const addImage2 = (el) => {
    if (el && !image2.current.includes(el)) {
      image2.current.push(el);
    }
  };

  const addHeading = (el) => {
    if (el && !heading.current.includes(el)) {
      heading.current.push(el);
    }
  };

  const addHeading2 = (el) => {
    if (el && !heading2.current.includes(el)) {
      heading2.current.push(el);
    }
  };

  const addLine = (el) => {
    if (el && !line.current.includes(el)) {
      line.current.push(el);
    }
  };

  const addLine2 = (el) => {
    if (el && !line2.current.includes(el)) {
      line2.current.push(el);
    }
  };

  const addDisc = (el) => {
    if (el && !disc.current.includes(el)) {
      disc.current.push(el);
    }
  };

  const addDisc2 = (el) => {
    if (el && !disc2.current.includes(el)) {
      disc2.current.push(el);
    }
  };

  return (
    <>
      <div className="projects-line" ref={addProLine}></div>
      <section ref={addSection} className="projects" id="project0">
        <div className="projects-title">
          <h2 ref={addProHead}>Here Are My</h2>
          <h1 ref={addProHead}>Projects</h1>
        </div>

        {/* project one */}

        <article id="pro-1" className="pro-one" ref={addArticles}>
          <div className="project-title">
            <div className="heading left" ref={addHeading}>
              <h1>Proshop</h1>
              <h1>Mern App</h1>
            </div>
            <div className="projects-line" ref={addLine}></div>
            <div className="disc" ref={addDisc}>
              <h2>
                Ecommerce MERN App with state management using Redux. Full
                featured shopping cart with PayPal & credit/debit payments,
                Admin area to manage customers, products & order, Product rating
                & review system. For admin panel testing sign in with username:
                Admin@example.com password: 12345.
              </h2>
            </div>
          </div>
          <div
            onClick={() =>
              window.open("https://proshop-v2.vercel.app/", "_blank")
            }
            id="img-1"
            className="project-image image-1"
            ref={addImage}
          ></div>
        </article>
        <div className="projects-line" ref={addProLine}></div>

        {/* project two */}

        <article className="pro-one" ref={addArticles2}>
          <div className="project-title">
            <div className="heading right" ref={addHeading2}>
              <h1>Github</h1>
              <h1>User Search</h1>
            </div>
            <div className="projects-line" ref={addLine2}></div>
            <div className="disc" ref={addDisc2}>
              <h2>
                In this app you can search any github user through github api
                and then the app will show you user data like users profile info
                , followers , languages used , most popular repos and most
                forked repos. I’ve used Styled Components for styling, React
                context api for state management , Auth0 for authentication and
                React Fution Charts for showing data.
              </h2>
            </div>
          </div>
          <span className="image-cover">
            <div
              onClick={() =>
                window.open("https://github-project1.netlify.app", "_blank")
              }
              className="project-image image-2"
              ref={addImage2}
            ></div>
          </span>
        </article>
        <div className="projects-line" ref={addProLine}></div>

        {/* project three */}

        <article id="pro-3" className="pro-one" ref={addArticles}>
          <div className="project-title">
            <div className="heading left" ref={addHeading}>
              <h1>AuditStream</h1>
              <h1>Accessbility Tool</h1>
            </div>
            <div className="projects-line" ref={addLine}></div>
            <div className="disc" ref={addDisc}>
              <h2>
                This full-stack web application is designed to scan websites for
                accessibility issues and generate structured reports. The
                frontend is built with React and provides multiple views for
                initiating scans and reviewing results, while the backend uses
                Node.js and Express to process scan requests. Axe-core is
                integrated to perform standards-based accessibility analysis,
                and MongoDB is used to store scan results and history. The
                application follows a clear frontend–backend architecture and is
                built with production scalability in mind.
              </h2>
            </div>
          </div>
          <span className="image-cover">
            <div
              onClick={() =>
                window.open("https://accessbility-tool.vercel.app/", "_blank")
              }
              className="project-image image-3"
              ref={addImage}
            ></div>
          </span>
        </article>
        <div className="projects-line" ref={addProLine}></div>

        {/* project four */}

        <article className="pro-one" ref={addArticles2}>
          <div className="project-title">
            <div className="heading right" ref={addHeading2}>
              <h1>Decrypto</h1>
              <h1>Cyrpto Price Tracker</h1>
            </div>
            <div className="projects-line" ref={addLine2}></div>
            <div className="disc" ref={addDisc2}>
              <h2>
                This is a simple React price tracker app for all the
                cryptocurrencies. You can search the name of the crypto you want
                to see the data about. By clicking any crypto you can see
                additional price data of past 24hr, one week and one year in
                chart form. I used chart.js for chart and coingecko api for
                cryptocurrency data.
              </h2>
            </div>
          </div>
          <span className="image-cover">
            <div
              onClick={() =>
                window.open("https://decrypto-1.netlify.app", "_blank")
              }
              className="project-image image-4"
              ref={addImage2}
            ></div>
          </span>
        </article>
        <div className="projects-line" ref={addProLine}></div>
      </section>
    </>
  );
};

export default SectionProjects;
