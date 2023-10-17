//Librairies
import navbardata from "../data/linknavbar.json";
import { NavLink as Link } from "react-router-dom";

//Composants
import Burger from "./Burger.jsx";

// Styles
import "../scss/navbar.scss";
import "../scss/root.scss";



export default function Navbar({ cart, count,}) {

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="link-container">
        <ul className="link-content">
          {navbardata.map((navdataIndex) => {
            return (
              <li key={navdataIndex.id} className="link">
                <a href={navdataIndex.linkurl}>{navdataIndex.linkname}</a>
              </li>
            );
          })}
        </ul>
        <div className="cart-section">
        <p className="cart-price">{cart.toFixed(2)} € ({count})</p>
          <Link to="/cart" className="cart" ></Link>
          
        </div>
      
      <Burger />
      </div>
    </nav>
  );
}
