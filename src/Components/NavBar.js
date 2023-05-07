import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: 'inline-block',
  width: '150px',
  padding: '12px',
  margin: '0 6px 6px',
  border: '1px solid black',
  borderRadius: '10px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

function NavBar() {
  return (
    <div>
      <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'darkblue',
        }}
      >
        Home
      </NavLink>
      <NavLink
        to='/login'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'darkblue',
        }}
      >
        Login
      </NavLink>
      <NavLink
        to='/add-form'
        exact
        style={linkStyles}
        activeStyle={{ background: 'darkblue' }}
      >
        Add Story
      </NavLink>
    </div>
  )
}

export default NavBar
