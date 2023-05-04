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
  const updateInnovation = (id, innovationData) => {
    fetch(`http://localhost:4200/innovations/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(innovationData),
    })
    .then(response => response.json())
    .then(updatedInnovation => {
      // Find the index of the updated innovation in the state array
      const index = innovations.findIndex(i => i.id === updatedInnovation.id);
      if (index >= 0) {
        // Update the state array with the updated innovation
        const newInnovations = [...innovations];
        newInnovations[index] = updatedInnovation;
        setInnovations(newInnovations);
      }
    })
    .catch(error => {
      console.error('Failed to update innovation:', error);
    });
  };
  

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

  function editInnovation(innovation) {
    fetch(`http://localhost:4200/innovations/${innovation.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(innovation),
    })
  }

  return (
    <div className='App'>
      <Header getInnovation={getInnovation} />

      <InnovationsList
        innovations={innovations}
        editInnovation={editInnovation}
        removeInnovation={removeInnovation}
      />
      <AddInnovation addInnovation={addInnovation} />

    </div>
  )
}

export default App
