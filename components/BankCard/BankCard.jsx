import React from 'react'
import './BankCard.css'
import chip from '../../images/chip.png'
import mastercard from '../../images/mastercard.png'

const BankCard = () => {
  return (
 
        <div className="card">
            <div className="card front-face">
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
                        <h5 className="number">8050 2030 3020 5040</h5>
                        <h5 className="name">Daniels Fega</h5>
                    </div>

                    <div className="valid-date">
                        <h6>Valid Thru</h6>
                        <h5>05/28</h5>
                    </div>
                </div>
            </div>

            <div className="card back-face">
                <h6>
                For customer service call +234-4104-9407 or email at
                danielsfega@gmail.com
                </h6>
                
                <span className="magnetic-strip"></span>
                <div className="cvv"><i>005</i></div>
                   
                <h5>
                    If card details are found and is not yours, please contact our support team immediately!
                </h5>
            </div>
        </div>

  )
}

export default BankCard