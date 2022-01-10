import React from 'react'
import { colors } from '../../colors'
import { HeroWrapper, } from './style'
const Hero = () => {
  return (
    <HeroWrapper className='App-hero'>
      <div className='hero'>
        <div className='text-area'>
          <div className='pattern'>
            <img src='images/bigPattern.svg' alt='bigPattern' />
          </div>
          <h1><span style={{ color: `${colors.action_btn}` }}>OPTIMIZED</span> <span style={{ color: `${colors.nav_link}` }}>OPERATION</span></h1>
          <div className='paragragh'>
            <p>
              Need  help  with  arranging,  sorting,  and  organizing your student
              result. Let <span><span style={{ color: `${colors.action_btn}` }}>Sort</span><span style={{ color: `${colors.nav_link}` }}>Box</span></span> handle this for you with
              zero stress, high accuracy and  precision.
            </p>
          </div>
          <div className='action-btns'>
            <button>
              GET STARTED
            </button>
            <button>
              TRY DEMO
            </button>
          </div>
        </div>
        <div className='side-image'>
          <img src='images/heroImages.svg' alt='heroImages' />
        </div>
      </div>
      <div className='divider'>
        <img src='images/dividerFirst.svg' alt='dividerFirst' />
      </div>
    </HeroWrapper>
  )
}

export default Hero
