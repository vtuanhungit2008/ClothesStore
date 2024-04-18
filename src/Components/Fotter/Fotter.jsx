import React from 'react'
import "./Fotter.css"
import footer_logo from "../Assets/logo_big.png"
import ig from "../Assets/instagram_icon.png"
import pt from "../Assets/pintester_icon.png"
import wa from "../Assets/whatsapp_icon.png"
const Fotter = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>CLOTHESTORE</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-contaniner">
            <img src={ig} alt="" />
        </div>
        <div className="footer-icons-contaniner">
            <img src={pt} alt="" />
        </div>
        <div className="footer-icons-contaniner">
            <img src={wa} alt="" />
        </div>
      </div>
      <div className="footer-copy">
            <hr />
            <p>Copyright @ 2024 - ALL RIGHT RESERVED</p>
      </div>
    </div>
  )
}

export default Fotter
