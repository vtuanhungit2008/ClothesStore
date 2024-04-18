import React, { useState } from 'react'
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
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
        <li onClick={()=>setMenu("shop")} > <Link style={{textDecoration:"none"}}  to="/">Shop</Link>{menu==="shop"?<hr></hr>:<></>}  </li>
        <li onClick={()=>setMenu("men")}><Link style={{textDecoration:"none"}} to="/mens">Men</Link> {menu==="men"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("women")}><Link  style={{textDecoration:"none"}} to="/womens">Women</Link> {menu==="women"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("kid")}><Link style={{textDecoration:"none"}} to='/kids'>Kid</Link>{menu==="kid"?<hr></hr>:<></>}</li>
        
      </ul>
      <div className="nav-login-cart">
        <button><Link style={{textDecoration:"none"}}  to="/login">Login</Link></button>
     
        <Link style={{textDecoration:"none"}}  to="/cart">   <img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
