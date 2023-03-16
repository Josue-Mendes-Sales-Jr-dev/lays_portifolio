import styled, { keyframes } from "styled-components"
import { Keyframes } from "styled-components";

const rotate=keyframes`
to{
    transform:rotate(0deg)
}
from{
    transform:rotate(45deg)
}`

export const Container=styled.div`
    width:100vw;
    min-height:100vh;
    background-color: white;
    padding-top:3rem;
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
    gap:1rem;
  
      a{
       margin:1rem;
       
       border:none;
       font-size:2rem;
       color:var(--btnColor);
       .icon{animation: ${rotate} 3s linear infinite;}
      }
    `