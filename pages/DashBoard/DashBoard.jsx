import React from 'react'
import './DashBoard.css'
import Chart, {data} from '../../components/Chart';
import Chart2 from '../../components/Chart2';
import MiniNav from '../../components/MinNav/MiniNav';
import CurrentLoan from '../../components/CurrentLoan';
import MasterCard from '../../components/BankCards/MasterCard/MasterCard';
import ApplePay from '../../components/BankCards/ApplePay/ApplePay';
import LoanDeals from '../../components/LoanDeals/LoanDeals';
import Activities from '../../components/Activities/Activities'
import Overview from '../../components/Overview/Overview';
import { FaApplePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { EffectCards, Autoplay, Pagination } from 'swiper/modules';

const DashBoard = () => {
    const borrowedAmount = 96550;

    const totalLoanSum = data.reduce((total, item) => total + item.Personal + item.Student + item.Business, 0);

    const totalLoans = {
        Personal: data.reduce((sum, month) => sum + (month.Personal || 0), 0),
        Student: data.reduce((sum, month) => sum + (month.Student || 0), 0),
        Business: data.reduce((sum, month) => sum + (month.Business || 0), 0),
        // Access: data.reduce((sum, month) => sum + (month.Access || 0), 0),
    };

    // Convert object to array and sort by loan amount (highest to lowest)
    const sortedLenders = Object.entries(totalLoans)
        .map(([name, amount]) => ({ name, amount }))
        .sort((a, b) => b.amount - a.amount);
  return (
    <div className='dashboard'>

        <MiniNav></MiniNav>
        <div className="content">
            <div className="overview">
                <Overview></Overview>
            </div>

            <div className="totalLoan">
                <p>Total Loan (past 5 months)</p>
                <h3><b>₦{totalLoanSum.toLocaleString()}</b></h3> {/* Display dynamic total */}
                <Chart></Chart>
            </div>

            <div className="currentLoan">
                <div>
                    <h3>Your Current Loan: <span style={{color: "#9a59ff"}}>₦{borrowedAmount.toLocaleString()}</span></h3>
                    <CurrentLoan borrowed={borrowedAmount} remaining={35723}/>
                </div>
                
                {/* <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay, Pagination]}
                    className="mySwiper"
                    loop={true} 
                    autoplay={{ 
                        delay: 0, 
                        disableOnInteraction: false 
                    }}
                    speed={4000}
                >
                    <SwiperSlide>
                        <MasterCard></MasterCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ApplePay></ApplePay>
                    </SwiperSlide>
                </Swiper> */}
                
                    <MasterCard></MasterCard>
                    <p className='paymentOption'>
                        MasterCard
                        <i className='paymentIcon'><RiMastercardFill /></i>
                    </p>
                 
                    <p className='paymentOption'>
                        ApplePay
                        <i className='paymentIcon'><FaApplePay /></i>
                    </p>

                    <p className='paymentOption'>
                        PayPal
                        <i className='paymentIcon'><FaPaypal /></i>
                    </p>
                 
                <button className='changePayment'>Add New Card</button>
            </div>

            <div className="hotLoanDeals">
                <h3>Hot Loan Deals</h3>
                <LoanDeals></LoanDeals>
            </div>

        
            <div className="piechart">
                <Chart2></Chart2>
            </div>

            <div className="activities">
                <Activities></Activities>
            </div>
        </div>

    </div>
  )
}

export default DashBoard