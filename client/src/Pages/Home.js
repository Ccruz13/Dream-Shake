import React from 'react'
import Carousel from '../Components/Carousel'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Products />
            <Footer />
        </div>
    )
}

export default Home
