import React from 'react'
import '../../components/register/Login.css'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='outer'>
        <div className="form-container">
  <p className="title">Log In</p>
  <form className="form">
    <div className="input-group">
      <label htmlFor="username">Email</label>
      <input type="text" name="email" id="username" placeholder="" />
    </div>
    <div className="input-group">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="" />
      <div className="forgot">
        <Link to='/signup'>
        New member ?
        </Link>
      </div>
    </div>
    <button className="sign">Log In</button>
  </form>
  </div>
    </div>
  )
}

export default Signin