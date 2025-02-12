import React from 'react';
import opay from '../../images/opay.png';
import palmpay from '../../images/palmpay.png';
import moniepoint from '../../images/moniepoint.png';
import access from '../../images/access.png';
import './Lenders.css';

const lenderImages = {
    Opay: opay,
    PalmPay: palmpay,
    MoniePoint: moniepoint,
    Access: access,
};

const Lenders = ({ sortedLenders }) => {
    return (
        <div className='lenders'>
            {sortedLenders.map(({ name, amount }) => (
                <div key={name} className="bank">
                    <img src={lenderImages[name]} alt={name} />
                    <p><b>${amount.toLocaleString()}</b></p>
                </div>
            ))}
        </div>
    );
};

export default Lenders;
