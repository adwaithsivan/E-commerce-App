import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import Topbar from '../Components/Topbar'
import Products from '../Components/Products'
import Footer from '../Components/Footer'

const Home = () => {

const [products, setProducts] = useState([])

  useEffect (() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    } 
    fetchProducts()
  }, [])
  return (
    <div>
      <Topbar/>
        <Hero/>
        <h1 className='text-l text-center mt-[5rem] font-normal uppercase '>products</h1>
        <h1 className='text-3xl text-center font-bold uppercase '>Most popular products</h1>
        {
          products.length > 0 ?
          <Products products ={products} />: <div> Loading... </div>
        }
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home
