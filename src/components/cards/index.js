import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'

const Card = ({ src, heading, paragraph }) => {
  return (
    <CardWrapper>
      <img src={src} alt='unkm' />
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </CardWrapper>
  )
}

export default Card


const CardWrapper = styled.div`
width: 343px;
height: 444px;
left: 88px;
top: 1141px;
display:flex;
flex-direction:column;
background: ${colors.white};
box-shadow: 0px 5px 0px rgba(64, 110, 226, 0.4), 0px -4px 4px rgba(64, 110, 226, 0.15);
border-radius: 10px;
align-items:center;
img{
  height:4rem;
  with:4rem;
  margin:2rem;
}
p{
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 40px;
width: 294px;

color: ${colors.grey_text};
}
`