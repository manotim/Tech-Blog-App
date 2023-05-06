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
        <h1>Login Form</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Username: </label>
            <input
              type='text'
              id='name'
              name='username'
              placeholder='Enter username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='pwd'>Password: </label>
            <input
              type='password'
              id='pwd'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input className='login-btn' type='submit' value='Login' />
        </form>
      </div>
    </div>
  )
}

export default Login
