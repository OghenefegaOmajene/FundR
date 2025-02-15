import React, {useState} from 'react'
import './LoanForm.css'
import { MultiStepProgressBar } from '../MultiStepProgressBar/MultiStepProgressBar'
import { CountrySelect, StateSelect, CitySelect } from 'react-country-state-city'
import "react-country-state-city/dist/react-country-state-city.css";

const LoanForm = () => {
    const [countryid, setcountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
  return (
    <div className='loanFormBox'>

        <MultiStepProgressBar></MultiStepProgressBar>

        
            <form className="form">

                <div className="personalDetails">

                    <span className="title">Your Personal Details</span>
                        <div className="fields">
                            <div className="group" id='firstName'>
                                <input placeholder="" type="text" required=""/>
                                <label for="name">First Name</label>
                            </div>
                            <div className="group" id='lastName'>
                                <input placeholder="" type="text" required=""/>
                                <label for="name">Last Name</label>
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
                            />
                        </div>

                        <div className="group" id='address'>
                            <input placeholder="" type="text" required=""/>
                            <label for="name">Street Address</label>
                        </div>
                        <div className="group" id='postCode'>
                            <input placeholder="" type="text" required=""/>
                            <label for="name">Post Code</label>
                        </div>
                    </div>
                </div>


                <div className="contactDetails">
                    <span className="title">Contact Details</span>

                    <div className="fields3">
            
                        <div className="group" id='phoneNo'>
                            <input placeholder="" type="text" required=""/>
                            <label for="name">Phone Number</label>
                        </div>
                        <div className="group" id='email'>
                            <input placeholder="" type="text" required=""/>
                            <label for="name">Email Address</label>
                        </div>
                    </div>
                </div>
                

                <button>
                    Next
                </button>
            </form>
        

        </div>
    
  )
}

export default LoanForm