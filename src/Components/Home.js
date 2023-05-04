import React from 'react'
import { Redirect } from 'react-router-dom'

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to='/login' />
}

export default Home
