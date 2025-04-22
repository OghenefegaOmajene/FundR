import React, {useState} from 'react'
import './LoanForm.css'
import MaterialUIStep from '../MaterialUIStep/MaterialUIStep'
// import VerticalStepper from '../VerticalStepper/VerticalStepper'
import { CountrySelect, StateSelect, CitySelect } from 'react-country-state-city'
import "react-country-state-city/dist/react-country-state-city.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


const LoanForm = () => {
    const [step, setStep] = useState(0);
    const [countryid, setcountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    const [PhoneNumber, setPhoneNumber] = useState('');

    const handleChange =(value) =>{
        setPhoneNumber(value);
    };

    const nextStep = () => {
        if (step < 2) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 0) setStep(step - 1)
    };

    // const nextStep = () => {
    //     if (step < initialStepsArr.length - 1) {
    //         setStep(step + 1);
    //     }
    // };
    
    // const prevStep = () => {
    //     if (step > 0) {
    //         setStep(step - 1);
    //     }
    // };


  return (
    <div className='loanFormBox'>
        <MaterialUIStep step={step}></MaterialUIStep>
        {/* <VerticalStepper currentStep={step}></VerticalStepper> */}

        <form className="form">
            {step === 0 && (
                <div className='personalInfo'>
                    <div className="personalDetails">

                        <span className="title">Your Personal Details</span>
                        <div className="fields">
                            <div className="group" id='firstName'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="group" id='lastName'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">Last Name</label>
                            </div>
                        </div>
                        
                    </div>

                    <div className="residentialDetails">
                        <span className="title">Your Residential Address</span>

                        <div className="fields2">
                            
                            <div className="group" id='country'>
                                <CountrySelect 
                                    onChange={(e) =>{
                                        setcountryid(e.id);
                                        console.log(e);  
                                    }}
                                    style={{border: "none"}}
                                    placeHolder='Select Country'
                                    className='selectCountry'
                                />
                            </div>

                            <div className="group" id='state'>
                                <StateSelect 
                                    disabled={!countryid}
                                    countryid={countryid}
                                    onChange={(e) =>{
                                        setstateid(e.id);
                                        console.log(e);  
                                    }}
                                    style={{border: "none"}}
                                    placeHolder='Select State'
                                    className='selectState'
                                />
                            </div>

                            <div className="group" id='state'>
                                <CitySelect 
                                    disabled={!stateid}
                                    countryid={countryid}
                                    stateid={stateid}
                                    onChange={(e) =>{
                                        console.log(e);  
                                    }}
                                    style={{border: "none"}}
                                    placeHolder='Select City'
                                    className='selectCity'
                                />
                            </div>

                            <div className="group" id='address'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">Street Address</label>
                            </div>
                            <div className="group" id='postCode'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">Post Code</label>
                            </div>
                        </div>
                    </div>


                    <div className="contactDetails">
                        <span className="title">Contact Details</span>

                        <div className="fields3">

                            <div className="group" id='phoneNo'>
                                <label htmlFor="" >
                                    {/* Phone Number: */}
                                    <PhoneInput
                                        international
                                        countryCallingCodeEditable={false}
                                        defaultCountry="NG" // Use the correct country code (e.g., "GB" for the UK)
                                        value={PhoneNumber}
                                        onChange={handleChange}   
                                        
                                    />
                                
                                </label>
                                
                            </div>
                            <div className="group" id='email'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">Email Address</label>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 1 && (
                    <div className="paymentDetails">
                        <span className="cardTitle">Your Card Details</span>
                        
                            <div className="group" id='firstName'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">Card Holder Name</label>
                            </div>
                            <div className="group" id='lastName'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">Card Number</label>
                            </div>
                        

                        <div className="paymentFields">
                            <div className="group" id='firstName'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">Expiry Date</label>
                            </div>
                            <div className="group" id='lastName'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">CVV</label>
                            </div>
                        </div>
                    </div>
            )}


            {step === 2 && (
                    <div className="summaryDetails">
                        <span className="title">Summary</span>
                        <div className="summaryField">
                            <div className="summaryGroup group" id='summary'>
                                <input placeholder="" type="text" required=""/>
                                <label htmlFor="name">Summary</label>
                            </div>
                        </div>
                    </div>
            )}


            <div className="Buttons">
                    {step > 0 && (
                        <button type="button" onClick={prevStep}>
                            Previous
                        </button>
                    )}
                    {step < 2 && (
                        <button type="button" onClick={nextStep}>
                            Next
                        </button>
                    )}
            </div>
            
        </form>
        

    </div>
    
  )
}

export default LoanForm



