import { useState } from 'react'
import './App.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Body from '../components/Body/Body'

function App() {
  

  return (
    <>
      <div className="App">
        <Sidebar></Sidebar>
        <Body></Body>
      </div>
    </>
  )
}

export default App
