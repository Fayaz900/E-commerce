import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Navbar/>} >
          <Route path='/' index element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
  )
}

export default App
