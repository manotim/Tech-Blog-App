import './App.css'
import React, { useState, useEffect } from 'react'
import InnovationsList from './InnovationsList'
import AddInnovation from './AddInnovation'
import Header from './Header'

function App() {
  const [innovations, setInnovations] = useState([])

  useEffect(() => {
    fetch('http://localhost:4300/innovations')
      .then((res) => res.json())
      .then((data) => setInnovations(data))
  }, [])

  const addInnovation =(innovations)=>{
    fetch('http://localhost:4300/innovations', {
      method : 'POST',
      headers:{
        'Content-Type': 'application/json',
        
      },

      body: JSON.stringify(innovations),
    })
    .then((response)=> response.json())
    .then((innovations) => {
      setInnovations([...innovations,innovations]);

    });
  
  };
  return (
    <div className='App'>
      <Header />
      <AddInnovation addInnovation={addInnovation}/>
      <InnovationsList innovations={innovations} />
    </div>
  )
}

export default App
