import './App.css'
import React, { useState, useEffect } from 'react'
import InnovationsList from './InnovationsList'
import Header from './Header'

function App() {
  const [innovations, setInnovations] = useState([])

  useEffect(() => {
    fetch('http://localhost:4300/innovations')
      .then((res) => res.json())
      .then((data) => setInnovations(data))
  }, [])
  return (
    <div className='App'>
      <Header />
      <InnovationsList innovations={innovations} />
    </div>
  )
}

export default App
