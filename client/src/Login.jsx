import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";
import Register from './Register'
// import register from "./Register";

function Login() {
    return (
      <div className="auth">
        <h1>Login</h1>
        <form className="form">
          <input type="text" for="email" placeholder='Username'/>
          <input type="text" for="password" placeholder="Password"/>
          <button>Login</button>
            {/* <p>This is an Error!</p> */}
            <span>Don't have an account? <Link to="/register">Register</Link></span>
        </form>
      </div>
    )
  }
  
  export default Login
  