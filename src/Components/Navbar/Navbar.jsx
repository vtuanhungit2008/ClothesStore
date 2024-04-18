import React, { useState } from 'react'
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import "./Navbar.css"
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>CLOTHESTORE</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setMenu("shop")} >Shop{menu==="shop"?<hr></hr>:<></>}  </li>
        <li onClick={()=>setMenu("men")}>Men {menu==="men"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("women")}>Women {menu==="women"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("kid")}>Kid {menu==="kid"?<hr></hr>:<></>}</li>
        
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
