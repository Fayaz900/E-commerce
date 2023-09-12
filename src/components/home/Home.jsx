import React from 'react'
import Card from '../card/Card'
import './Home.css'
import products from '../../assets/CategoryData'

function Home() {
  console.log(products)
  return (
    <div className='card-collection'>
      {
        products.map((item,index)=>{
          return <Card key={index} category={item}/>
        })
      }
       
    </div>
  )
}

export default Home