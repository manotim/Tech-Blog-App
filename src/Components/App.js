import './App.css'
import React, { useState, useEffect } from 'react'
import InnovationsList from './InnovationsList'
import UpdateInnovation from './UpdateInnovation'
import AddInnovation from './AddInnovation'
import Header from './Header'

function App() {
  const [innovations, setInnovations] = useState([])

  useEffect(() => {
    fetch('http://localhost:4200/innovations')
      .then((res) => res.json())
      .then((data) => setInnovations(data))
  }, [])



  const addInnovation = (innovations) => {
    fetch('http://localhost:4200/innovations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(innovations),
    })

    .then((response)=> response.json())
    .then((innovations) => {
      setInnovations([...innovations,innovations]);

    });
  
  };

  const onDeleteInnovationItem = (id) => {
    fetch(`http://localhost:4200/innovations/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setInnovations(innovations.filter((item) => item.id !== id));
      });
  };


  return (
    <div className='App'>
      <Header />      
      <InnovationsList innovations={innovations} onDeleteInnovationItem={onDeleteInnovationItem} />     
      <UpdateInnovation updateInnovation={UpdateInnovation}/>
      <AddInnovation addInnovation={addInnovation}/>

    </div>
  )
}

export default App
