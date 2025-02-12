import React from 'react'
import opay from '../../images/opay.png'
import palmpay from '../../images/palmpay.png'
import moniepoint from '../../images/moniepoint.png'
import access from '../../images/access.png'
import './Lenders.css'

const Lenders = ({totalLoans}) => {
  return (
    <div className='lenders' >
        <div className="bank">
          <img src={opay} alt="" />
          <p><b>${totalLoans.Opay.toLocaleString()}</b></p>
        </div>
        
        <div className="bank">
          <img src={palmpay} alt="" />
          <p><b>${totalLoans.PalmPay.toLocaleString()}</b></p>
        </div>

        <div className="bank">
          <img src={moniepoint} alt="" />
          <p><b>${totalLoans.MoniePoint.toLocaleString()}</b></p>
        </div>

        <div className="bank" id='access'>
          <img src={access} alt="" />
          <p><b>${totalLoans.Access.toLocaleString()}</b></p>
        </div>
        
        
    </div>
  )
}

export default Lenders