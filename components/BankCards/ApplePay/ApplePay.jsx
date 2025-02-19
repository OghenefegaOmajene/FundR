import React from 'react'
import './ApplePay.css'
import apple from '../../../images/apple.png'
import chip from '../../../images/chip.png'

const ApplePay = () => {
  return (
    <div className='applePay'>
        <div className="appleLogo">
            <img src={apple} alt="" />
        </div>
        <div className="appleName">
            <h4>Daniels Fega</h4>

            <img src={chip} alt="" />
        </div>
    </div>
  )
}

export default ApplePay