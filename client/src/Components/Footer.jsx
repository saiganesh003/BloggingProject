import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from "../img/Logo Blog 4.png";

function Footer() {
    return (
      <>
        <div className='footer'>
          <div className='logo'>
            <img src={Logo}/>
          </div>
          <div className='MadeBy'>Made By Sai Ganesh</div>
        </div>
      </>
    )
  }
  
  export default Footer
  