// import React from 'react'
import Mobile from './Mobile'
import Laptop from './Laptop'
import Slider from './Slider'
import Baneer from './Banner'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Baneer/>
        <Slider />
      <Mobile />
      <Laptop />
      <Footer/>
    </div>
  )
}

export default Home