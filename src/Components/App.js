import './App.css'
import React, { useState, useEffect } from 'react'
import InnovationsList from './InnovationsList'
import AddInnovation from './AddInnovation'
import Header from './Header'

function App() {
  const [innovations, setInnovations] = useState([])

  function getInnovation(search) {
    const newInnovation = innovations.filter(
      (innovation) => innovation.innovation_title === search
    )
    console.log(search)
    console.log(newInnovation)
    setInnovations(newInnovation)
  }

  function fetchInnovations(setInnovations) {
    fetch('http://localhost:4200/innovations')
      .then((res) => res.json())
      .then((data) => setInnovations(data))
  }

  useEffect(() => {
    fetchInnovations(setInnovations)
  }, [])

  const addInnovation = (innovations) => {
    fetch('http://localhost:4200/innovations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(innovations),
    })
      .then((response) => response.json())
      .then((innovations) => {
        setInnovations([...innovations, innovations])
      })
  }

  if (innovations.length === 0) {
    return (
      <main>
        <div className='title'>
          <h1>No Current Innovations</h1>
          <button
            className='refresh-btn'
            onClick={() => fetchInnovations(setInnovations)}
          >
            Refresh
          </button>
        </div>
      </main>
    )
  }

  function removeInnovation(id) {
    const remainingInnovations = innovations.filter(
      (innovation) => innovation.id !== id
    )
    setInnovations(remainingInnovations)
  }

  return (
    <div className='App'>
      <Header getInnovation={getInnovation} />
      <AddInnovation addInnovation={addInnovation} />
      <InnovationsList
        innovations={innovations}
        removeInnovation={removeInnovation}
      />
    </div>
  )
}

export default App
