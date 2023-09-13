import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Login from './components/register/Register'
import Signin from './components/signin/Signin'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Navbar/>} >
        <Route path='/signup' index element={<Login/>}/>
        <Route path='/login' index element={<Signin/>}/>
          <Route path='/' index element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
  )
}

export default App
