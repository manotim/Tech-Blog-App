import React from 'react'
import imageLogoLeft from '../images/logo_left.jpg'
import imageLogoRight from '../images/logo_right.png'

function Header() {
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
    </div>
  )
}

export default Header
