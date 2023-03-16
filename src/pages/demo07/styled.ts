import styled from "styled-components";
import Image from "../../assets/imagens/cardiovascular.jpg"
import Image01 from "../../assets/imagens/cardHuman.jpg"
import Image02 from "../../assets/imagens/tecidoAdiposo.jpg"

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
background-color:white;
display:flex;
justify-content:flex-start;
align-items:center;
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
   display:grid;
   grid-template-columns: auto auto;
   justify-content:center;
   align-items:center;
   width:80vw;
   gap:.5rem;
   overflow:hidden;
   border:10px solid black;
   margin:2rem;
   min-height:5vh;
  
   
`
export const TextBox01=styled.div`

`
export const TextBox02=styled.div`

`
export const TextBoxPart02=styled.div`
padding:4rem;
display:grid;
grid-template-columns: auto auto;
grid-template-columns:auto auto;
justify-content:center;
align-items:center;
width:80vw;
min-height:100vh;
gap:1rem;
border:10px solid red;
`
export const Img01=styled.img.attrs({
   src:`${Image01}`
})`

width:40vw;
height:45vh;
border-radius:10px;
`
export const T=styled.div`

`
export const Img02=styled.img.attrs({
   src:`${Image02}`
})`
width:25vw;
height:80vh;
border-radius:10px;
`
