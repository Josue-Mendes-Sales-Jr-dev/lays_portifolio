import styled from "styled-components";
import Image from "../../assets/imagens/cardHuman.jpg"

export const Container=styled.div`
width:24rem;
height:26.5rem;
 display:flex;
 align-items:center;
 justify-content:center;
  flex-direction:column;
  border:5px solid var(--bdCard);
 :hover{
  box-shadow:1px 1px 2px 2px gray;
 }
  @media (max-width:480px){
    width:18rem;
    height:25.5rem;
}
@media (max-height:420px){
    width:24rem;
    height:14rem;
    flex-direction:row;
}
`
export const Text=styled.div`
width:23.5rem;
height:8rem;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
a{
  color:White
  background-color:blue;
  padding:1rem 9.5rem;
  border:3px solid gray;
  border-radius:2px;
  text-transform:uppercase;
  cursor:pointer;
  :hover{
    background-color:#646cff;
    color:pink;
    }
  @media (max-width:480px){
    padding:1rem 6.5rem;
   }
   @media (max-height:420px){
    padding:2rem 1.8rem;
  }
}
@media (max-width:480px){
  width:17rem;
  height:7rem;
 
}
@media (max-height:420px){
  width:8rem;
  height:13.5rem;
  
}

`
export const Title=styled.h2`
     display:flex;
    align-items:center;
     justify-content:center;
     font-size:1.2rem;
     width:24rem;
     height:2.5rem;

     @media (max-width:480px){
      width:17rem;
      font-size:1rem;
      height:2rem;
      
    }
    @media (max-height:420px){
      width:8rem;
      text-align:center;
      height:6rem;
    }
`
export const Img=styled.img.attrs({
    src:`${Image}`
})`
width:23.5rem;
height:18rem;
@media (max-width:480px){
  width:17.5rem;
  height:18rem;
}
@media (max-height:420px){
  width:16rem;
  height:13.7rem;
  
}
`