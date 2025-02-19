import React from 'react'
import './MasterCard.css'
import chip from '../../../images/chip.png'
import mastercard from '../../../images/mastercard.png'

const MasterCard = () => {
  return (
 
        <div className="card">

                <header>
                    <span className="masterCard">
                        <img src={mastercard} alt="" />
                        <h5>Master Card</h5>
                    </span>
                    <img src={chip} alt="" className="chip" />
                </header>

                <div className="card-details">
                    <div className="name-number">
                        <h6>Card Number</h6>
                        <h5 className="number">805* **** **** 5040</h5>
                        
                    </div>

                    <div className="valid-date">
                        <h5 className="name">Daniels Fega</h5>

                        <div className="valid">
                            <h6>Valid Thru</h6>
                            <h5>05/28</h5>
                        </div>
                        
                    </div>
                </div>
        </div>

  )
}

export default MasterCard