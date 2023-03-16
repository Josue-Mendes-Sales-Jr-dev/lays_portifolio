import styled from "styled-components";
import Image from "../../assets/imagens/cardiovascular.jpg"
import ImageMap from "../../assets/imagens/cel_hematopoetica.jpg"


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
         font-size:1.4rem;
      }
  } 
  @media (max-height:480px){
       
      a{ padding:.5rem;
         font-size:1.4rem;
      }
  } 
`
export const Title=styled.h1`
   
    color:black;
    height:3rem;
    margin:3rem;
    text-align:center;
    @media (max-width:420px){
      font-size:2rem;
      margin-bottom:3rem;
    } 
    @media (max-height:480px){
      font-size:2rem;
      margin-bottom:3rem;
    } 
   
`
export const TitleH2=styled.h2`
    color:black;
    margin-top:3rem;
    font-size:2rem;
    text-align:left;
    @media (max-width:420px){
      font-size:1.6rem;
      margin-bottom:3rem;
    } 
    @media (max-height:420px){
      font-size:1.6rem;
      margin-top:0rem;
    } 
    
   
`
export const Img=styled.img.attrs({
   src:`${Image}`
})`
   width:80vw;
   height:50vh;
   border-radius:10px;
   @media (max-width:480px){
      width:80vw;
    } 
   @media (max-height:480px){
      height:60vh;
      margin-bottom:-2rem
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
p{
   margin-bottom:.5rem;
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
      font-size:1.05rem;
   } 
   @media (max-height:480px){
      font-size:1.05rem;
   } 
   
}

`
export const ImgMap=styled.img.attrs({
   src:`${ImageMap}`
})`
   width:80vw;
   height:80vh;
   border-radius:10px;
   border:none;

   @media (max-width:420px){
      width:80vw;
      height:50vh;
    } 
`