import React from 'react'
import { HeaderWrapper } from './style'

const Header = () => {
  return (

    <HeaderWrapper className="App-header">
      <span className="App-header-logo" >
        <img src='images/logo.svg' alt="logo" />
      </span>
      <nav className='App-header-nav'>
        <ul className='nav-links'>
          <li className='nav-link active'>Why Us</li>
          <li className='nav-link'>About Us</li>
          <li className='nav-link'>How It Works</li>

        </ul>
        <div className='connect-btn'>
          <button>connect with us</button>
        </div>
      </nav>

    </HeaderWrapper>

  )
}

export default Header

