import navbardata from "../data/linknavbar.json";
import "../scss/navbar.scss";
import "../scss/root.scss";
import Burger from "./Burger.jsx";

export default function Navbar({ cart, count }) {

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
          <div className="cart"></div>
          
        </div>
      
      <Burger />
      </div>
    </nav>
  );
}
