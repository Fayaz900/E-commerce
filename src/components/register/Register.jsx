import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin=(e)=>{
        e.preventDefault();
        // console.log(email,password)
        fetch('https://student-auth.vercel.app/register',{
            method:"POST",
            body: JSON.stringify({
                name:name,
                email:email,
                password:password,
            }),
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((res)=>res.json())
        .then((item)=>console.log(item))
        .catch((err)=>console.log(err.message))
    }

  return (
    <div className='outer'>
        <div className="form-container">
  <p className="title">Register</p>
  <form className="form">
  <div className="input-group">
      <label htmlFor="username">Name</label>
      <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} placeholder="" />
    </div>
    <div className="input-group">
      <label htmlFor="username">Email</label>
      <input type="text" name="email" id="username" onChange={(e)=>setEmail(e.target.value)} placeholder="" />
    </div>
    <div className="input-group">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="" />
      <div className="forgot">
        <Link to='/login'>
        Already member ?
        </Link>
      </div>
    </div>
    <button className="sign" onClick={handleLogin}>Sign up</button>
  </form>
  </div>
    </div>
  )
}

export default Register