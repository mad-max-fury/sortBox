import styled from 'styled-components'
import { colors } from '../../colors'

export const HeroWrapper = styled.section`
height:calc(100vh - 4.2rem);
// border:1px solid red;
display:flex;
flex-direction:column;
.hero{
  align-items:center;
  margin:0 auto;
  justify-content:space-between;
  width:80vw;
  display:flex;
  height:93%;
  .text-area{
    width:45%;
    height:fit-content;
    // border:1px solid red;
    & > div.pattern{
      height:100px;
      width:70%;
      img{
        width:100%;
        height:100%;
      }
    }
    & > h1{
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 44px;
      line-height:0;
      
      
    }
    & > div.paragragh{
      font-family: Roboto;
     font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 40px;
      letter-spacing:1.6px;
      color:${colors.grey_text}
    }
    & > div.action-btns{
      display: flex;
      gap:1rem;
      & > button{
           font-family: Roboto;
           font-style: normal;
           font-weight: bold;
           font-size: 18px;
           line-height: 0px;
           color:${colors.white};
        width: 200px;
        height: 54px;
        background: #0D3291;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
            &:hover{
              transition:all .4s ease-in-out;
            cursor:pointer;
              color:${colors.main_color};
          background:${colors.white};
          }
        &:last-of-type{
          color:${colors.main_color};
          background:${colors.white};
          &:hover{
            cursor:pointer;
             color:${colors.white};
          background:${colors.main_color};
          }
        }
      }
    }
  }
 .side-image{
   width:40%;
   height:90%;
  //  border:1px solid red;
   img{
   width:100%;
   height:100%;
   }
 }
}
.divider{
  align-self:center;
  width:70%;
  img{
    width:100%;
  }
}
`
