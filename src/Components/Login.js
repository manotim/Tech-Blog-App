import { useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Login({ setIsLoggedIn }) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    setIsLoggedIn(true)

    // after logging the user in, redirect to the home page!
    history.push('/')
  }

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default Login
