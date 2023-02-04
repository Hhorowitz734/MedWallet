import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import Navbar from './components/navbar'
import GetStarted from './components/getstarted'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Navbar/>
      <GetStarted />
    </React.Fragment>
  )
}

export default App
