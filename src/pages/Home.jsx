import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = ({products}) => {
  return (
    <div>
        <Navbar />
     <Hero />
     <Products products={products} />
     <Footer />
      
    </div>
  )
}

export default Home
