import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/loanify.png'
import { Link } from 'react-router-dom'
// import Contact from '../Contact/Contact';

const Navbar = () => {
    // alert(activeTab)
    // console.log("Active Tab:", activeTab);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='navBar'>
        <div className="navLogo">
            <img src={logo} alt="" />
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to=''>Services</Link>
            <Link to=''>How It Works</Link>
            <Link to=''>Benefits</Link>
        </nav>

        <div className="navBtn">
          <button className='logIn'>
            <Link to='/UserLogin'>Login</Link>  
          </button>
          {/* <button className='logIn'>
            <Link to='/DashBoard'>Sign Up</Link>  
          </button> */}
        </div>

        <div className="navBarToggle">
            <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
            <label htmlFor="checkbox" className="navToggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
            </label>
        </div>
    </div>
  )
}


export default Navbar;

