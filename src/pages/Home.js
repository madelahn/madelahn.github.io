import React from 'react'

function Home() {
  return (
    <div className="home-wrapper">
        <div className="main-body">
        <div className="body-content">
            <h2>hi, my name is madeline! :)</h2>
            <p>i'm a second-year student at the university of toronto studying computer science, statistics, and religion.
            <br></br><br></br>
            i love all things art, technology, and culture, and i'm devoted to making a positive impact on the world! 
            <br></br><br></br>
            by using my brain and my hands, i hope to create something special that a lot of people can enjoy.
            <br></br><br></br>
            i'm currently interested in  web and app development, game design, data science, and information security.
            </p>
        </div>
        </div>
        <div className="secondary-body">
        <div className="image-container">
            <img src={require("../assets/pashmina-transparent.png")} />
        </div>
        </div>
    </div>
    )
}

export default Home;