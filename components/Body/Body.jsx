import React from 'react'
import './Body.css'
import avatar from '../../images/avatar.jpg'
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { TiMessageTyping } from "react-icons/ti";
import Chart2, {data} from '../Chart2';
import CurrentLoan from '../CurrentLoan';
import BankCard from '../BankCard/BankCard';
import Lenders from '../Lenders/Lenders';
import Calendar from '../Calendar';

const Body = () => {
    const totalLoanSum = data.reduce((total, item) => total + item.Opay + item.PalmPay + item.MoniePoint, 0);

    const totalOpay = data.reduce((sum, month) => sum + month.Opay, 0);
    const totalPalmPay = data.reduce((sum, month) => sum + month.PalmPay, 0);
    const totalMoniePoint = data.reduce((sum, month) => sum + month.MoniePoint, 0);
    const totalAccess = data.reduce((sum, month) => sum + month.Access, 0);
  return (
    <div className='body'>
        <nav className='nav'>
            <IoNotificationsSharp />
            <TiMessageTyping />
            <IoMdSettings/>

            <img src={avatar} alt="" className='avatar'/>
        </nav>

        <div className="content">

            <div className="totalLoan">
                <p>Total Loan (past 5 months)</p>
                <h3><b>${totalLoanSum.toLocaleString()}</b></h3> {/* Display dynamic total */}
                <Chart2></Chart2>
            </div>

            <div className="currentLoan">
                <h1>Your Current Loan</h1>
                <CurrentLoan borrowed={100000} remaining={50000}/>
                <BankCard></BankCard>
                <button className='changePayment'>Change Payment Method</button>
            </div>

            <div className="topLenders">
                <h1>Top Lenders</h1>
                <Lenders totalLoans={{ Opay: totalOpay, PalmPay: totalPalmPay, MoniePoint: totalMoniePoint,Access: totalAccess }} />
            </div>

            <div className="calendar">
                <Calendar></Calendar>
            </div>

            <div className="activities">
                Activities
            </div>
        </div>

    </div>
  )
}

export default Body