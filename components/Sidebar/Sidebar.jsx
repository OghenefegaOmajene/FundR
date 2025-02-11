import React from 'react'
import './Sidebar.css'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import logo from '../../images/logo2.png'

const Sidebar = () => {
  return (
    <div className='sideNav'>
      <img src={logo} alt="" />

      <div className="sideNavLinks">
        <a href=""><TbLayoutDashboardFilled /> Dashboard</a>
        <a href=""><FaChartPie /> Statistics</a>
        <a href=""><FaSackDollar /> Loans</a>
        <a href=""><FaCalendarAlt /> Calendar</a>
        <a href=""><GiNotebook /> Activities</a>
      </div>
        
      <div className="logOutBtn">
        <a href="" className='logOut'><IoLogOut /> Log Out</a>
      </div>

    
        
    </div>
  )
}

export default Sidebar