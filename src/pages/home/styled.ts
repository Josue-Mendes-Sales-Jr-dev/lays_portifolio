import styled from "styled-components";
import Image01 from "../../assets/imagens/imgHome.png"
import ImagePerfil from "../../assets/imagens/imgPerfil.png"


export const Container=styled.div`
    width:100vw;
    min-height:100vh;
    background-color: var(--bgC);
    padding-top:3rem;
    display:flex;

    @media(max-width:1200px){
        flex-direction:column;
    }
    @media(max-height:420px){
        flex-direction:row;
    }
    
`
export const Box=styled.div`
    width:50vw;
    padding-top:3rem;
`
export const Title=styled.div`
    
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:white;
    width:50vw;
    min-height:20vh;

    h1{ 
        text-align:center;
        font-size:5rem;
        width:30rem;
        border-bottom:10px solid white;
    }   
    
    h2{ 
        
        font-size:2rem;
         width:30rem;
        text-align:right;
    }
    @media (max-width:1200px){
        width:100vw;
        h1{ 
            text-align:center;
            font-size:3rem;
            width:16rem;
            border-bottom:5px solid white;
        }   
        
        h2{ 
            
            font-size:1.5rem;
             width:16rem;
            text-align:right;
        }
       
    }
    @media (max-width:480px){
        padding-top:2rem;
       
        h1{ 
            font-size:3rem;
            width:18rem;
            border-bottom:5px solid white;

        }
        h2{ 
            font-size:1.4rem;
             width:18rem;
            text-align:right;
        }
    }
    @media (max-height:420px){
        width:50vw;
        padding-top:1rem;
        h1{ 
            font-size:2rem;
            width:12rem;
            border-bottom:4px solid white;
            margin-bottom:1rem;
        }
        h2{ 
            margin-top:-1rem;
            font-size:1.4rem;
             width:12rem;
            text-align:right;
        }
      }
    
`
export const Img=styled.img.attrs({
    src:`${Image01}`
})`
     width:50vw;
    height:100vh;
    @media (max-width:1200px){
        width:100vw;
        height:100vh;
    }
    @media (max-width:480px){
        height:50vh;
        
    }
    @media (max-height:420px){
        width:50vw;
        
    }
    
    
`
export const TextBox=styled.div`
      margin-top:-5rem;
      min-width:10vw;
     min-height:10vh;
     display:flex; 
     justify-content:center;
     align-items:center;
     gap:2rem;


`
export const ImgPerfil=styled.img.attrs({
    src:`${ImagePerfil}`
})`
   width:55%;
   border-radius:50%;
   border:none;
   @media (max-width:1200px){
    width:60%;
    margin-left:10rem;
    margin-top:2rem;
    padding-bottom:2rem;
    
}
  @media (max-width:480px){
    margin-left:8rem;
    padding-top:1.5rem;
    width:16rem;
    height:14rem;
}
@media (max-height:420px){
    margin-top:3rem;
    margin-right:17rem;
    width:16rem;
    height:14rem;
    
  }
`

export const Pag1=styled.section`
    background-color:white;
    padding-top:4.5rem;
    padding-bottom:3rem;
     width:100vw;
     min-height:100vh;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     h1{
        margin-bottom:3rem;
        text-align:center;
        width:10rem;
        color:blue;
        border-bottom:5px solid;
     }
     
`
export const Box1=styled.div`
width:100vw;
min-height:100vh;
display:grid;
gap:2rem;
justify-content:center;
align-items:center;
grid-template-columns:auto auto auto;

@media (max-width:1250px){
    grid-template-columns: auto auto;

}

@media (max-width:850px){
    grid-template-columns: auto;

}

`
export const Pag2=styled.section`
      background-color:var(--bgPag2);
      width:100vw;
      min-height:80vh;
      margin:0px;
      padding-top:4.5rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

      h1{
        margin-bottom:3rem;
        text-align:center;
        margin:0px;
        color:white;
        width:20rem;
        border-bottom:5px solid white;

      }
      `
export const BoxP2=styled.div`
width:100vw;
min-height:80vh;
display:grid;
justify-content:center;
align-items:center;
grid-template-columns:auto auto auto;

`