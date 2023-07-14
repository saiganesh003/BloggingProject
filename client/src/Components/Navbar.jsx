import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";
import Logo from "../img/Logo Blog 4.png";
import logo from "/Users/saiganesh/Dev/Prj2/client/src/img/Logo Blog 1.png";

function Navbar() {
    return (
      <>
      {/* SG<div className='BlOg'>BLOG</div> */}
        <div className='navbar'>
          <div className='container'>
            <div className='logo'>
              <img src={Logo} alt='Logo'/>
            </div>
            <div className='links'>
              <Link className='link' to="/?cat=art">
                <div>ART</div>
              </Link>
              <Link className='link' to="/?cat=science">
                <div>SCIENCE</div>
              </Link>
              <Link className='link' to="/?cat=technology">
                <div>TECHNOLOGY</div>
              </Link>
              <Link className='link' to="/?cat=cinema">
                <div>CINEMA</div>
              </Link>
              <Link className='link' to="/?cat=design">
                <div>DESIGN</div>
              </Link>
              <Link className='link' to="/?cat=food">
                <div>FOOD</div>
              </Link>
              <div className='link'>Ganesh</div>
              <div className='link'>Logout</div>
              <span className='write'>
                <Link className="link" to="/write">Write</Link>
              </span>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Navbar
  