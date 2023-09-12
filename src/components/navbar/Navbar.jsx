import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div>
    <div className='nav'>
        <div className="left">
          <div className="first"><img src={logo} className='logo' alt="logo" /></div>
              <span style={{color:"red",marginLeft:"10px"}}>Fay</span>Store
        </div>
        <div className="right">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Navbar