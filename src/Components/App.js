import './App.css'
import React, { useState, useEffect } from 'react'
import InnovationsList from './InnovationsList'

function App() {
  const [innovations, setInnovations] = useState([])

  useEffect(() => {
    fetch('http://localhost:4500/innovations')
      .then((res) => res.json())
      .then((data) => setInnovations(data))
  }, [])
  return (
    <div className='App'>
      <InnovationsList innovations={innovations} />
    </div>
  )
}

export default App
