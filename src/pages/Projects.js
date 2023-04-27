import React from 'react';
import { useState } from "react";

function Projects() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }

  return (
    <div className="projects-wrapper">
        <div className="secondary-body">
            <div className="project-list">
                <div className={toggleState === 1 ? "project-tab active-project-tab" : "project-tab"} 
                onClick={() => toggleTab(1)}>
                    <p>Menstruation Nation</p>
                </div>
                <div className={toggleState === 2 ? "project-tab active-project-tab" : "project-tab"} 
                onClick={() => toggleTab(2)}>
                    <p>Blanc</p>
                </div>
                <div className={toggleState === 3 ? "project-tab active-project-tab" : "project-tab"} 
                onClick={() => toggleTab(3)}>
                    <p>Personal Website</p>
                </div>
                <div className={toggleState === 4 ? "project-tab active-project-tab" : "project-tab"} 
                onClick={() => toggleTab(4)}>
                    <p>Study Hero</p>
                </div>
            </div>

        </div>
        <div id="projects" className="main-body">
            <div className={toggleState === 1 ? "project active-project" : "project"}>
                <div className="project-container">
                    <h2>Menstruation Nation</h2>
                    <div className="project-display">
                        <div className="project-description">
                            <p>
                                A period tracker developed for The Period Purse as a part of UofT Blueprint.
                                <br></br><br></br>
                                Worked alongside other developers to create the Android application using Kotlin and Jetpack Compose with Google Firebase.
                            </p>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <a href="https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse" target="_blank">View the app here!</a>
                            <a href="https://github.com/uoftblueprint/the-period-purse-2023" target="_blank">GitHub Repository</a>
                        </div>
                        <div className="project-image">
                            <img src={require("../assets/blueprint-1.png")} />
                            <img src={require("../assets/blueprint-2.png")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={toggleState === 2 ? "project active-project" : "project"}>
                <div className="project-container">
                    <h2>Blanc</h2>
                    <div className="project-display">
                        <div className="project-description">
                            <p>A nonogram puzzle game developed for the Kurius Hacks Game Jam CE, winning the First Place Jury Prize.
                                <br></br><br></br>
                                Developed using Godot and GDScript, with artwork and music done by my friends!
                            </p>
                            <br></br><hr></hr><br></br>
                            <a href="https://madelahn.itch.io/blanc" target="_blank">Play the game here!</a>
                            <a href="https://github.com/madelahn/blanc" target="_blank">GitHub Repository</a>
                        </div>
                        <div className="project-image">
                            <img src={require("../assets/blanc-1.png")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={toggleState === 3 ? "project active-project" : "project"}>
                <div className="project-container">
                    <h2>Personal Website</h2>
                    <div className="project-display">
                        <div className="project-description">
                            <p>A personal website to showcase my work and who I am.
                                <br></br><br></br>
                                Created using React JS, HTML and CSS. Surprisingly, this is the website you're on right now!
                            </p>
                            <br></br><hr></hr><br></br>
                            <a href="https://github.com/madelahn/madelahn.github.io" target="_blank">GitHub Repository</a>
                        </div>
                        <div className="project-image">
                            <img src={require("../assets/website.png")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={toggleState === 4 ? "project active-project" : "project"}>
                <div className="project-container">
                    <h2>Study Hero</h2>
                    <div className="project-display">
                        <div className="project-description">
                            <p>A studying game created for CSC207: Software Design, allowing the user to set work timers and gain rewards.
                                <br></br><br></br>
                                Created using Java with an emphasis on Clean Architecture and SOLID Principles.
                            </p>
                            <br></br><hr></hr><br></br>
                            <a href="https://github.com/CSC207-2022F-UofT/course-project-studyhero" target="_blank">GitHub Repository</a>
                        </div>
                        <div className="project-image">
                            <img src={require("../assets/studyhero.png")} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}
export default Projects;
