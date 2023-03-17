import styled from "styled-components";
import Image from "../../assets/imagens/sistemaNervoso.jpg"
import ImageMapB1 from "../../assets/imagens/baco1.png"
import ImageMapB2 from "../../assets/imagens/baco2.png"
import ImageMapB3 from "../../assets/imagens/baco3.png"

export const Container=styled.div`
   width:100vw;
   min-height:100vh;
   background-color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   @media (max-width:420px){
      width:90vw;
   } 
   @media (max-height:480px){
      width:90vw;
   }
`
export const BackButton=styled.button`
  width:100vw;
   background-color:var(--bgC);
   display:flex;
  justify-content: flex-start;
  align-items:center;
  border:none;
  

  a{
  
   margin:1rem;
   border-radius:5px;
   padding:1rem 4rem;
   font-size:2rem;
   color:var(--btnColor);
   background-color:var(--btnBg);
   :hover{
      color:blue;
   }
  }

  @media (max-width:420px){
       
      a{ padding:1rem;
         font-size:1.4rem;;
      }
  } 
  @media (max-height:480px){
      a{ 
         padding:.5rem;
         font-size:1.4rem;
      }
  } 
`
export const Title=styled.h1`
    color:black;
    height:5rem;
    margin:3rem;
    text-align:center;
    @media (max-width:420px){
      font-size:2rem;
      margin-bottom:3rem;
      margin-top:1rem;
      height:4rem;

    } 
    @media (max-height:480px){
      font-size:2.2rem;
      height:5rem;
      margin-top:3rem;
      margin-bottom:2rem;
    }
`
export const TitleH2=styled.h2`
    color:black;
    margin-top:3rem;
    font-size:2rem;
    text-align:left;
    width:80vw;
    @media (max-width:420px){
      font-size:1.6rem;
      margin-bottom:2rem;
      width:80vw;
    } 
    @media (max-height:480px){
      font-size:1.6rem;
      margin-bottom:2rem;
      width:80vw;
    } 
    
   
`
export const Img=styled.img.attrs({
   src:`${Image}`
})`
   width:80vw;
   height:50vh;
   border-radius:10px;
   @media (max-width:420px){
      width:80vw;
    } 
    @media (max-height:480px){
      
    }
`
export const TextBox=styled.div`
   padding:4rem;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   width:80vw;
   gap:.5rem;
   overflow:hidden;
   margin:2rem;
   min-height:5vh;
   @media (max-width:420px){
      padding:1rem
      width:80vw;
    } 
    @media (max-height:480px){
      padding:1rem
      width:80vw;
   } 
`
export const TextBox01=styled.div`
display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
p{
   font-size:1.5rem;
   @media (max-width:420px){
      font-size:1rem;
   } 
   @media (max-height:480px){
      font-size:1rem;
   } 
}
li{
   margin-bottom:.5rem;
   font-size:1.5rem;
   
   @media (max-width:420px){
      font-size:1rem;
   } 
   @media (max-height:480px){
      font-size:1rem;
   } 
   
}
.C{
   text-align:center;
}

`
export const ImgMapB1=styled.img.attrs({
   src:`${ImageMapB1}`
})`
   width:80vw;
   height:80vh;
   border-radius:.2rem;
   border:none;
   margin-bottom:.5rem;
   border:1px solid black;

   @media (max-width:420px){
      width:80vw;
      height:50vh;
    } 
    @media (max-height:480px){
      
   } 
`
export const ImgMapB2=styled.img.attrs({
   src:`${ImageMapB2}`
})`
   width:80vw;
   height:80vh;
   border-radius:.2rem;
   margin-bottom:.5rem;
   border:1px solid black;
   @media (max-width:420px){
      width:80vw;
      height:50vh;
    } 
    @media (max-height:480px){
      
   } 
`
export const ImgMapB3=styled.img.attrs({
   src:`${ImageMapB3}`
})`
   width:80vw;
   height:80vh;
   border-radius:.2rem;
    border:1px solid black;
   margin-bottom:2rem;
   @media (max-width:420px){
      width:80vw;
      height:50vh;
    } 
    @media (max-height:480px){
      
   } 
`
