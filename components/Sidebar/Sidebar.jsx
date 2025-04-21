import React, {useState} from 'react'
import './Sidebar.css'
import { TbActivity } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { GiBinoculars, GiNotebook } from "react-icons/gi";
import { IoLogOut, IoCard } from "react-icons/io5";
import logo from '../../images/loanify.png'
// import Loan from '../../pages/Loan/Loan';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
        <div className="menu-toggle">
            <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
        </div>

      <div className={`sideNav ${isMenuOpen ? 'open' : ''}`}>

        <img src={logo} alt="" className='logo'/>

        <div className="sideNavLinks">
          <Link to='/DashBoard'>
            <i><GiBinoculars /></i> 
            <p>Overview</p>
          </Link>
          
          {/* <Link to='/'>
            <i><FaHome /></i> 
            <p>Home</p>
          </Link> */}

          {/* <Link to=''>
            <i><FaChartPie /> </i>
            <p>Statistics</p>
          </Link> */}


          <Link to='/DashBoard/Loan'>
            <i><GiNotebook /></i> 
            <p>Apply for Loans</p>  
          </Link>

          <Link to=''>
            <i><TbActivity /></i> 
            <p>Transactions</p>
          </Link>

          <Link to=''>
            <i><IoCard /></i> 
            <p>Payment</p>
          </Link>
        </div>
          
        <div className="logOutBtn">
          <a href="" className='logOut'>
            <i><IoLogOut /></i> 
            <p>Log Out</p>
          </a>
        </div>
          
      </div>
    </>
  )
}

export default Sidebar