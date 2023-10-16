import navbardata from "../data/linknavbar.json";
import "../scss/navbar.scss";
import "../scss/root.scss";
import Burger from "./Burger.jsx";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="link-container">
        {navbardata.map((navdataIndex) => {
          return ( 
            <li key={navdataIndex.id} className="link">
              <a href={navdataIndex.linkurl} 
              >{navdataIndex.linkname}</a>
            </li>
            );
        })}
      </ul>
      <Burger />
    </nav>
  );
}


