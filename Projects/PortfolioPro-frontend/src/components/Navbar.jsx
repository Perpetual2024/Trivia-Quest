import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
function Navbar(){
    return (
        
        <nav className="navbar">
        <div className="navbar-container">
          <ul className='navbar-links'>
            <li>
              <Link to="/">PortfolioPro</Link>
            </li>
            <li>
              <Link to="/profiles">ProfilePage</Link>
            </li>
            <li>
              <Link to="/projects">ProjectPage</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
            
          </ul>
        </div>
  
        
      </nav>
  
    )
}
export default Navbar;  