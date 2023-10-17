import navbardata from "../data/linknavbar.json";
import "../scss/navbar.scss";
import "../scss/root.scss";
import { HashLink as Link } from "react-router-hash-link";


export default function Burger() {
    return (
      <nav className="menuToggle">
       
          <input type="checkbox" aria-label="Menu"/>
          <span></span>
          <span></span>
          <span></span>
          
          <ul className="menu">
          {navbardata.map((navdataIndex) => {
            return (
              <li key={navdataIndex.id} className="link"  >
                <Link to={navdataIndex.linkurl} 
                >{navdataIndex.linkname}</Link>
              </li>
            );
          })}
        </ul>
        
      </nav>
  
    );
  }
  