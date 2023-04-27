import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';


function Contact() {
  return (
    <div className="contact-wrapper">
        <div className="main-body" id="contact">
            
            <div className="body-content" id="contact-body">
                <h2>★<br></br>get in touch!</h2>
                <hr></hr>
                <p>if you have any questions or just want to learn more about me, feel free to get in contact!</p>
                <br></br>
                <p>you can email me at:</p>
                <a href="mailto:madeline.ahn@gmail.com">madeline.ahn@gmail.com</a>                
            </div>
      <br></br>
        </div>
        <div className="secondary-body" id="socials-body">
            <div className="body-content" id="socials-body">
                <p>or, check out my socials!</p>
                <div className="socials">
                    <a href="https://github.com/madelahn" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://linkedin.com/in/madelahn" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="madelahn.itch.io" target="_blank"><FontAwesomeIcon icon={faItchIo} /></a>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Contact;