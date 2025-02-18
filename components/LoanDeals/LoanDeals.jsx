import React from 'react'
import './LoanDeals.css'
import { TiArrowForward } from "react-icons/ti";

const LoanDeals = () => {
  return (
    <div className='deals'>

        <div className="hotDeals">
            <p>₦50,000 at 7% interest p.a</p>
            <i><TiArrowForward /></i>
        </div>

        <div className="hotDeals">
            <p>₦177,000 at 11% interest p.a</p>
            <i><TiArrowForward /></i>
        </div>

        <div className="hotDeals">
            <p>₦134,000 at 7% interest p.a</p>
            <i><TiArrowForward /></i>
        </div>
 
    </div>
  )
}

export default LoanDeals