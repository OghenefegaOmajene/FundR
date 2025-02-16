import React from 'react'
import './Loan.css'
// import { MultiStepProgressBar } from '../../components/MultiStepProgressBar/MultiStepProgressBar'
import LoanForm from '../../components/LoanForm/LoanForm'
import MiniNav from '../../components/MinNav/MiniNav'

const Loan = () => {
  return (
    <div className='loan'>
      <MiniNav></MiniNav>
      <LoanForm></LoanForm>
    </div>
  )
}

export default Loan