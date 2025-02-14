import { useState } from 'react'
import './App.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Body from '../components/Body/Body'
// import Loan from '../pages/Loan/Loan'

function App() {
  

  return (
    <>
      <div className="App">
        <Sidebar></Sidebar>
        {/* <Loan></Loan> */}
        <Body></Body>
      </div>
    </>
  )
}

export default App
