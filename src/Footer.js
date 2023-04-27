import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function Footer() {

  return (
    
    <div id="footer" className="container">
        <div className="toggle"><FontAwesomeIcon icon={faSun} /></div>
        <div className="copyright">© madelahn</div>
    </div>
  )
}
export default Footer;