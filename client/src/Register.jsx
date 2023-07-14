// import react from '@vitejs/plugin-react-swc'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";
import {useState} from 'react';
import axios from "axios";

function Register() {
  const[inputs,setInputs]=useState({
    username:"",
    email:"",
    password:""
  });

  const handleChange =e=>{
    setInputs(prev=>({...prev,[e.target.name] : e.target.value}))
  }

  const handleSubmit = async e=>{
    e.preventDefault()
    try{
      const res=await axios.post("http:localhost:8800/api/auth/register",inputs)
      console.log(res);
    }catch(err){
      console.log(err+" not findinf ")
    }
  }
  console.log(inputs);
    return (
      <>
        <div className="auth">
        <h1>Register</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input required type="text" for="username" placeholder='Username' name='username' onChange={handleChange}/>
          <input required type="text" for="Email" placeholder='Email' name='email' onChange={handleChange}/>
          <input required type="text" for="password" placeholder="Password" name='password' onChange={handleChange}/>
          <button>Register</button>
          {/* <p>This is an Error!</p> */}
          <span>Do you have an account? <Link to="/login">Login</Link></span>
        </form>
      </div>
      </>
    )
  }
  
  export default Register
  