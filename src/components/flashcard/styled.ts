import styled from "styled-components";
import {keyframes} from "styled-components";

const rotate=keyframes`
  to{
    transform:rotateX(100deg)
  }
  from{
    transform:rotateX(0deg)
  }
`
export const Container=styled.div`
    width:48rem;
    height:36rem;
    background-color:red;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:.3rem;
    animation:${rotate} 1s linear;
`
export const Btn=styled.button`
      width:44rem;
      height:4rem;
      background-color:blue;
      color white;

      :hover{
        background-color:#2315FF;
      }
`
   export const TextBox=styled.div`
   padding:1rem;
   display:flex;
   align-items:center;
   justify-content:center;
   width:44rem;
   height:28rem;
    background-color:white;
`