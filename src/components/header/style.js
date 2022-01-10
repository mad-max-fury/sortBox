import styled from 'styled-components'
import { colors } from '../../colors'

export const HeaderWrapper = styled.header`
 display:flex;
 padding: 0 10%;
 height:4rem;
 border-bottom-left-radius:30px;
 border-bottom-right-radius:30px;
 align-items:center;
 justify-content:space-between;
 background:${colors.general_bg};
 max-width:100%;
box-shadow: 0px 4px 4px rgba(64, 110, 226, 0.15);
 .App-header-nav{
   width:65%;
   align-items:center;
   justify-content:space-between;
   display:flex;
   .nav-links{
     display:flex;
     list-style:none;
     gap:3rem;
    
     .nav-link{
       cursor:pointer;
       color:${colors.regular_text_color}
       font-family: Roboto;
       font-size: 17px;
       line-height: 28px;
       color: #000000;
      }
      .active{
       color:${colors.nav_link}
     }
   }
   .connect-btn{
   
     & > button{
       font-family: Roboto;
       font-size: 24px;
       line-height: 28px;
       color: ${colors.white};
       background:${colors.action_btn};
       padding:0px 2rem;
       height:3rem;
       text-align:center;
       outline:none;
       border:none;
       cursor:pointer;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
       border-radius: 60px;  
     }
     
   }
 }
`
