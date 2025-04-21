import React from 'react'
import './MiniNav.css'
import avatar from '../../images/avatar.jpg'
import { IoMoon, IoHome } from "react-icons/io5";

const MiniNav = () => {
  return (
    <nav className='miniNav'>
        <i><IoHome /></i>
        <i><IoMoon/></i>
        <img src={avatar} alt="" className='avatar'/>
    </nav>
  )
}

export default MiniNav