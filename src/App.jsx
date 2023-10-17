//Librairies
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Composants
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";

function App() {
  let [count, setcount] = useState(0);
  let [cart, setCart] = useState(0);
  let [globalCart, setGlobalCart] = useState([]);

  const updateCart = (data) => {
    setCart((cart += data.price)) & setcount((count += 1));
    setGlobalCart(prevState => [...prevState, data]);
  };
  console.log(globalCart);

  return (
    <Router basename="/">
      <NavBar cart={cart} count={count} />
      <Routes>
        <Route path="" element={<Home updateCart={updateCart} cart={cart} />} />
        <Route path="cart" element={<Cart  globalCart={globalCart} setGlobalCart={setGlobalCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
