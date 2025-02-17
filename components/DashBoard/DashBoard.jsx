import React from 'react'
import './DashBoard.css'
import Chart, {data} from '../Chart';
import Chart2 from '../Chart2';
import MiniNav from '../MinNav/MiniNav';
import CurrentLoan from '../CurrentLoan';
import BankCard from '../BankCard/BankCard';
// import Calendar from '../Calendar/Calendar';
import Activities from '../Activities/Activities'
import Overview from '../Overview/Overview';
import { FaApplePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";

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
                    <h1>Your Current Loan: <span style={{color: "#9a59ff"}}>₦{borrowedAmount.toLocaleString()}</span></h1>
                    <CurrentLoan borrowed={borrowedAmount} remaining={35723}/>
                </div>
                
                <BankCard></BankCard>
                    <p className='paymentOption'>
                        ApplePay
                        <i className='paymentIcon'><FaApplePay /></i>
                    </p>
                 
                    <p className='paymentOption'>
                        PayPal
                        <i className='paymentIcon'><FaPaypal /></i>
                    </p>

                    <p className='paymentOption'>
                        Amazon Pay
                        <i className='paymentIcon'><FaAmazonPay /></i>
                    </p>
                 
                <button className='changePayment'>See More</button>
            </div>

            <div className="topLenders">
                <h1>Hot Loan Deals</h1>
                {/* <Lenders /> */}
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