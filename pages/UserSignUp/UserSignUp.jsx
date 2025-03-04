import React from 'react'
import '../UserSignUp.css'
import { Link } from 'react-router-dom';
import { BiLogoGmail } from "react-icons/bi";
import { IoKeySharp } from "react-icons/io5";
import { FaGoogle, FaUserSecret } from "react-icons/fa";
import { FaApple, FaUserNinja } from "react-icons/fa";


const UserSignUp = () => {
  return (
    <div className='formBg'>
        <form className="userLoginForm">
            <div className="password">
                <label>FirstName </label>
                <div className="signUpInput">
                    <i><FaUserNinja /></i>       
                    <input type="password" className="input" placeholder="Enter your FirstName"/>
                </div>
            </div>

            <div className="password">
                <label>LastName </label>
                <div className="signUpInput">
                    <i><FaUserSecret /></i>       
                    <input type="password" className="input" placeholder="Enter your LastName"/>
                </div>
            </div>

            <div className="email">
                <label>Email </label>
                <div className="signUpInput">
                    <i><BiLogoGmail /></i>
                    <input type="text" className="input" placeholder="Enter your Email"/>
                </div>
            </div>    

            <div className="password">
                <label>Password </label>
                <div className="signUpInput">
                    <i><IoKeySharp /></i>       
                    <input type="password" className="input" placeholder="Enter your Password"/>
                </div>
            </div>

            <div className="forgotPass">
                <span className="span">Forgot password?</span>
            </div>

            <div className="s">
                <button className="signInBtn">
                    <Link to='/DashBoard'>Sign Up</Link>
                </button>
            </div>
            
            <p className="p">Already have an account? <Link to='/UserLogin' className='span'>Log In</Link>

            </p>
        </form>
    </div>
  )
}

export default UserSignUp