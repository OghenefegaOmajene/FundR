import React, {useState} from 'react'
import './Sidebar.css'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import logo from '../../images/logo2.png'

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
          <a href=""> 
            <i><TbLayoutDashboardFilled /></i> 
            <p>Dashboard</p>
          </a>


          <a href="">
            <i><FaChartPie /> </i>
            <p>Statistics</p>
          </a>


          <a href="">
            <i><FaSackDollar /></i> 
            <p>Loans</p>  
          </a>

          <a href="">
            <i><FaCalendarAlt /></i> 
            <p>Calendar</p>
          </a>

          <a href="">
            <i><GiNotebook /></i> 
            <p>Activities</p>
          </a>
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