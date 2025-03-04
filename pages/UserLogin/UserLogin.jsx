import React from 'react'
import './UserLogin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogoGmail } from "react-icons/bi";
import { IoKeySharp } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const UserLogin = () => {

    const navigate = useNavigate(); // Initialize navigation

  // Function to handle Sign In button click
  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form submission refresh

    // Show Toastify notification
    toast.success('Logged in successfully!', {
      position: "top-right",
      autoClose: 2000, // 2 seconds duration
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    // Navigate to Dashboard after the toast is done
    setTimeout(() => {
      navigate('/DashBoard');  // Redirect to Dashboard
    }, 2000); // Match autoClose duration
  };

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
                <button className="signInBtn" onClick={handleSignIn}>
                    <Link to=''>Log In</Link>
                </button>
            </div>
            
            <p className="p">Don't have an account? <Link className='span' to='/UserSignUp'>Sign Up</Link>

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

        <ToastContainer />
    </div>
  )
}

export default UserLogin