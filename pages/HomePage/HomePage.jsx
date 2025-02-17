import React from 'react'
import './HomePage.css'
import Navbar from '../../components/Navbar/Navbar'
import wallet from '../../images/wallet.png'
import phone from '../../images/phone.png'
import gsap from 'gsap'

const animateSlide = () => {
    gsap.fromTo(
      ".homeImg",
      { opacity: 0, y: -500 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".homeTxt",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 3, ease: "power2.out" }
    );
};
const HomePage = () => {
  return (
    <div className='homePage'>
        <Navbar></Navbar>

        <div className='home'>
            <div className="homeTxt">
                <h2>Get the Funds You Need—Fast, Simple & Hassle-Free!</h2>
                <p>Whether you're looking to start a business, cover an emergency, or finance a big purchase, we provide quick and flexible loan solutions tailored just for you. With competitive interest rates, easy repayment plans, and no hidden fees, getting the financial support you need has never been easier.</p>
            </div>

            <div className="homeImg">
                <img src={phone} alt="Computer man" className='phone'></img>
                <img src={wallet} alt="Computer man" className='wallet'></img>
            </div>
            
            {/* <video autoPlay muted loop className='bgVid'>
                <source src={bankCardsVid} type='video/mp4'/>
            </video> */}
        </div>
    </div>
  )
}

export default HomePage