import './App.css'
import MobileDetails from './components/MobileDetails'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './Components/Navbar'
import Mobile from './components/Mobile'
import Laptop from './components/Laptop'
import Checkout from './components/Checkout'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/mobile-details" element={<MobileDetails/>}></Route>
        <Route path="/mobiles" element={<Mobile/>}></Route>
        <Route path="/computers" element={<Laptop/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </>
  )
}

export default App
