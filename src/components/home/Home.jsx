import React from 'react'
import Card from '../card/Card'
import './Home.css'
import products from '../../assets/CategoryData'
import { ToastContainer } from 'react-toastify'

function Home() {
  console.log(products)
  return (
    <div className='card-collection'>
      <ToastContainer/>
      {
        products.map((item,index)=>{
          return <Card key={index} category={item}/>
        })
      }
       
    </div>
  )
}

export default Home