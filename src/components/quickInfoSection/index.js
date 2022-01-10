import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'
import Card from '../cards'

const QuickInfoSection = () => {
  return (
    <Section>
      <WhySection>
        <h1>WHY</h1>
        <div className='cardWrapper'>
          <Card heading={"FAST  SERVICE"} src={'images/cogs.svg'} paragraph={"Powered by a team of ML engineers, to ensure accurrate result"} />
          <Card heading={"ACCURATE"} src={'images/Accurate.svg'} paragraph={"Tested and validated, just  a snap and we take it from there."} />
          <Card heading={"HIGHLY SECURE"} src={'images/Guard.svg'} paragraph={"We are a secure system provider. by ensure lorem ipsium lorem ipsium"} />
        </div>
      </WhySection>
      <AboutSection>
        <h1>ABOUT</h1>
        <div className='cardWrapper'>
          <div><img src='images/Group.svg' alt='group' /></div>
          <div className='text-about'>
            <h1>LEADING THE WORLD
              TOWARD UNBIASED
              RECOGNITION.</h1>
            <p>To help digitalize the operational system of the
              educational institution and provide real time
              performance analysis to students as well as an
              efficient mode of uploading short answers question
              results and bulk upload of student result.
            </p>
          </div>
        </div>
      </AboutSection>
    </Section>
  )
}

export default QuickInfoSection
const Section = styled.section`
 height:fit-content;
 width:80vw;
 margin:0 auto;
`
const WhySection = styled.section`
 width:100%;
   height: fit-content;
   padding-bottom:1rem;

 display:flex;
 flex-direction:column;
 align-items:center;
 gap:4rem;
 & > h1{
   font-family: Roboto;
   font-style: normal;
   font-weight: bold;
   font-size: 38px;
   line-height: 6px;

 }
 & > div.cardWrapper{

   width:100%;
   display:flex;
   justify-content:space-between;
   height: fit-content;
 }
`
const AboutSection = styled.section`
 width:100%;
   height: fit-content;
   padding-bottom:1rem;

 display:flex;
 flex-direction:column;
 align-items:center;
 gap:4rem;
 & > h1{
   font-family: Roboto;
   font-style: normal;
   font-weight: bold;
   font-size: 38px;
   line-height: 6px;
   color:${colors.nav_link};

 }
 & > div.cardWrapper{
   border:1px solid red;
   width:100%;
   display:flex;
   justify-content:space-between;
   height: fit-content;
   .text-about{
       border:1px solid red;
    h1{
           font-family: Roboto;
          font-style: normal;
     font-weight: bold;
   font-size: 36px;
   line-height: 56px;

   color: #1F2D51;
    }
    p{
        font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 40px;
width: 294px;

color: ${colors.grey_text};
    }
   }
 }
`