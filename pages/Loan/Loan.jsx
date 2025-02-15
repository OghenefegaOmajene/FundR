import React from 'react'
import './Loan.css'
// import { MultiStepProgressBar } from '../../components/MultiStepProgressBar/MultiStepProgressBar'
import LoanForm from '../../components/LoanForm/LoanForm'

const Loan = () => {
  return (
    <div className='loan'>
      <LoanForm></LoanForm>
    </div>
  )
}

export default Loan