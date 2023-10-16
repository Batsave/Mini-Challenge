import navbardata from "../data/linknavbar.json";
import "../scss/navbar.scss";
import "../scss/root.scss";

export default function Burger({ cart }) {
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
                <a href={navdataIndex.linkurl} 
                >{navdataIndex.linkname}</a>
              </li>
            );
          })}
        </ul>
        
      </nav>
  
    );
  }
  