import React from 'react'
import imageLogoLeft from '../images/logo_left.jpg'
import imageLogoRight from '../images/logo_right.png'
import SearchInnovation from './SearchInnovation'

function Header({ getInnovation }) {
  return (
    <div>
      <header>
        <nav>
          <img src={imageLogoLeft} alt='' className='logo' />
          <h1 className='heading'>
            TECH<em>World</em>
          </h1>
          <img src={imageLogoRight} alt='' className='logo' />
        </nav>
      </header>
      <SearchInnovation getInnovation={getInnovation} />
    </div>
  )
}

export default Header
