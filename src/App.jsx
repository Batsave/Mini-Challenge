import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import Home from './pages/home.jsx'
import { useState } from 'react'


function App() {

  let [cart, setCart] = useState(0)
const updateCart = (price)=>(setCart(cart+=price))


  return (
    <>
     <NavBar cart={cart} />
     <Home updateCart={updateCart} cart={cart}/>
     <Footer />
    </>
  )
}

export default App
