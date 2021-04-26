import React, { useEffect, useState } from 'react'
import Base from './Base'
import "../App.css";
import Card from './card';
import { getProducts } from './helper/coreapicalls';




const Home = () => {

  const [products, setproducts] = useState([])
  const [error, seterror] = useState(false)

  const loadAllProducts = () => {
    getProducts().then(data =>{
      if(data.error){
        seterror(data.error)
      } else {
       setproducts(data)
      }
    })
  }

  useEffect(() => {
    loadAllProducts()
  }, [])
    return (
      <Base title="Home Page" description="Welcome to the Tshirt Store">
       <div className="row text-center">
          <h1 className="text-white">All of tshirts</h1>
          <div className="row">
            {products.map((product , index)=>{
            return (
              <div key={index} className= "col-4 mb-4">
                  <Card product={product}/>
              </div>
            )
          })}
          </div>
       </div>
      </Base>
    )
}

export default Home
