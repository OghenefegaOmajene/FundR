import { useState } from 'react'
import './App.css'
// import Sidebar from '../components/Sidebar/Sidebar'
// import Body from '../components/Body/Body'
// import Loan from '../pages/Loan/Loan'
import AppRouter from './AppRouter'

function App() {
  return (
    <>
      <div className="App">
        <AppRouter></AppRouter>
      </div>
    </>
  )
}

export default App
