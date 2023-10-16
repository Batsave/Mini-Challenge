import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import Home from './pages/home.jsx'
import { useState } from 'react'


function App() {

  let [count, setcount] = useState(0)
  let [cart, setCart] = useState(0)
const updateCart = (price)=>(setCart(cart+=price) & setcount(count+=1))


  return (
    <>
     <NavBar cart={cart} count={count}/>
     <Home updateCart={updateCart} cart={cart}/>
     <Footer />
    </>
  )
}

export default App
