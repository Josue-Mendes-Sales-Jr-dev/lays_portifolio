import styled from "styled-components";
import Image from "../../assets/imagens/cardiovascular.jpg"

export const Container=styled.div`
   width:100vw;
   min-height:100vh;
   background-color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   
`
export const BackButton=styled.button`
width:100vw;
background-color:var(--bgC);
display:flex;
justify-content:flex-start;
align-items:center;
border:none;

  a{
   margin:1rem;
   border-radius:5px;
   padding:1rem 4rem;
   font-size:2rem;
   color:var(--btnColor);
   background-color:var(--btnBg);
  }
`
export const Title=styled.h1`
    color:black;
    height:5rem;
    margin:3rem;
    text-align:center;
   
`
export const TitleH2=styled.h1`
    color:black;
    height:5rem;
    margin-top:3rem;
    font-size:2rem;
    text-align:left;
   
`
export const Img=styled.img.attrs({
   src:`${Image}`
})`
   width:80vw;
   height:50vh;
   border-radius:10px;
`
export const TextBox=styled.div`
   padding:4rem;
   display:flex;
   columns:300px 3;
   justify-content:center;
   align-items:center;
   width:80vw;
   gap:.5rem;
   overflow:hidden;
   margin:2rem;
   min-height:5vh;
  
   
`
export const TextBox01=styled.div`
li{
   font-size:1.5rem;
   
}

`

