import React from 'react'
import './MiniNav.css'
import avatar from '../../images/avatar.jpg'
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { TiMessageTyping } from "react-icons/ti";

const MiniNav = () => {
  return (
    <nav className='nav'>
        <i><IoNotificationsSharp /></i>
        <i><TiMessageTyping /></i>
        <i><IoMdSettings/></i>
        <img src={avatar} alt="" className='avatar'/>
    </nav>
  )
}

export default MiniNav