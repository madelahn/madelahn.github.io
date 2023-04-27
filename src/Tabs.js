import React from 'react';
import { useState } from "react";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Fun from "./pages/Fun";
import "./App.css";

function Tabs() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <>
      <div className="container">
        <div className="bloc-tabs">
          <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} 
          onClick={() => toggleTab(1)}>
            <p>Home</p>
          </div>
          <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} 
          onClick={() => toggleTab(2)}>
            <p>Projects</p>
          </div>
          <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} 
          onClick={() => toggleTab(3)}>
            <p>Fun</p>
          </div>
          <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"} 
          onClick={() => toggleTab(4)}>
            <p>Contact</p>
          </div>
        </div>

        <div className="content-tabs">
          <div className={toggleState === 1 ? "content active-content" : "content"}>
            <Home />
          </div>

          <div className={toggleState === 2 ? "content active-content" : "content"}>
            <Projects />
          </div>
          
          <div className={toggleState === 3 ? "content active-content" : "content"}>
            <Fun />
          </div>

          <div className={toggleState === 4 ? "content active-content" : "content"}>
            <Contact />
          </div>
        </div>
    </div>
    </>
  )
}

export default Tabs;
