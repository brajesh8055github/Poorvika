// import React from 'react'
import Mobile from './Mobile'
import Laptop from './Laptop'
import Slider from './Slider'
import Baneer from './Banner'

const Home = () => {
  return (
    <div>
        <Baneer/>
        <Slider />
      <Mobile />
      <Laptop />
    </div>
  )
}

export default Home