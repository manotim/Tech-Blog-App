import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import InnovationsList from './InnovationsList'
import AddInnovation from './AddInnovation'
import Header from './Header'
import Home from './Home'

import Login from './Login'
import NavBar from './NavBar'

function App() {
  const [innovations, setInnovations] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  function getInnovation(search) {
    const newInnovation = innovations.filter(
      (innovation) => innovation.innovation_title === search
    )
    console.log(search)
    console.log(newInnovation)
    setInnovations(newInnovation)
  }

  function fetchInnovations(setInnovations) {
    fetch('https://coder-news.onrender.com/innovations')
      .then((res) => res.json())
      .then((data) => {
        setInnovations(data)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchInnovations(setInnovations)
    } else {
      setIsLoading(false)
    }
  }, [isLoggedIn])

  const addInnovation = (innovations) => {
    fetch('https://coder-news.onrender.com/innovations', {
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

  function removeInnovation(id) {
    const remainingInnovations = innovations.filter(
      (innovation) => innovation.id !== id
    )
    setInnovations(remainingInnovations)
  }

  function editInnovation(innovation) {
    fetch(`https://coder-news.onrender.com/innovations/${innovation.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(innovation),
    })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isLoggedIn) {
    history.push('/login')
  }

  if (innovations.length === 0 && isLoggedIn) {
    return (
      <main>
        <h2>No New Innovations</h2>
        <br />
        <button
          className='refresh-btn'
          onClick={() => fetchInnovations(setInnovations)}
        >
          Refresh
        </button>
      </main>
    )
  }

  return (
    <div className='App'>
      <Header getInnovation={getInnovation} />
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route exact path='/login'>
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path='/add-form'>
          <AddInnovation addInnovation={addInnovation} />
        </Route>
        <Route exact path='/'>
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
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
