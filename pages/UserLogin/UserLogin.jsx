import React from 'react'
import './UserLogin.css'
import { Link } from 'react-router-dom';
import { BiLogoGmail } from "react-icons/bi";
import { IoKeySharp } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const UserLogin = () => {
  return (
    <div className='formBg'>
        <form className="userLoginForm">
            <div className="email">
                <label>Email </label>
                <div className="inputForm">
                    <i><BiLogoGmail /></i>
                    <input type="text" className="input" placeholder="Enter your Email"/>
                </div>
            </div>    

            <div className="password">
                <label>Password </label>
                <div className="inputForm">
                    <i><IoKeySharp /></i>       
                    <input type="password" className="input" placeholder="Enter your Password"/>
                </div>
            </div>

            <div className="forgotPass">
                <span className="span">Forgot password?</span>
            </div>

            <div className="s">
                <button className="signInBtn">
                    <Link to='/DashBoard'>Sign In</Link>
                </button>
            </div>
            
            <p className="p">Don't have an account? <span className="span">Sign Up</span>

            </p><p className="p line">Or With</p>

            <div className="signInMethods">
                <button className="googleBtn">
                    <FaGoogle />
                    Google 
                </button>
                <button className="appleBtn">
                    <FaApple />
                    Apple 
                </button>
            </div>
        </form>
    </div>
  )
}

export default UserLogin