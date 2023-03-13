import styled from "styled-components";
import Image from "../../assets/imagens/cardHuman.jpg"

export const Container=styled.div`
width:24rem;
height:26.5rem;
background-color:red;
 display:flex;
 align-items:center;
 justify-content:center;
  flex-direction:column;
  border:5px solid var(--bdCard);
 :hover{
  box-shadow:1px 1px 8px 5px gray;
 }
  @media (max-width:480px){
    width:18rem;
    height:24rem;
}
@media (max-height:420px){
    width:24rem;
    height:14rem;
    flex-direction:row;
}
`
export const Text=styled.div`
width:23.5rem;
height:6rem;
background-color:blue;
display:flex;
align-items:center;
justify-content:center;
a{
  color:White
  padding:2rem 8.4rem;
  border:5px solid white;
  text-transform:uppercase;
  cursor:pointer;
  :hover{
    background-color:#646cff;
    color:pink;
    }
  @media (max-width:480px){
    padding:2rem 5.2rem;
   }
   @media (max-height:420px){
    padding:6rem .6rem;
  }
}
@media (max-width:480px){
  width:17rem;
  height:6rem;
  
}
@media (max-height:420px){
  width:8rem;
  height:14rem;
  
}

`
export const Img=styled.img.attrs({
    src:`${Image}`
})`
width:23.5rem;
height:20rem;
@media (max-width:480px){
  width:17.5rem;
  height:18rem;
}
@media (max-height:420px){
  width:16rem;
  height:14rem;
  
}
`