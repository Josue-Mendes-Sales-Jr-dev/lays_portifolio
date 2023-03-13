import Carousell from "../../components/carousel"
import { LinkCard } from "../../components/linkCard"
import *as C from "./styled"

export const Home=()=>{
    return(
        <>
          <C.Container id="home">
          
          <C.Box>
            <C.Title>
              <h1>Morfologia</h1>
              <h2>Lays Lins</h2>
            </C.Title>
              <C.TextBox>
                <C.ImgPerfil/>
              </C.TextBox>
            </C.Box>
            <C.Img/>
          </C.Container>
          <C.Pag1 id="temas">
            <h1>Temas</h1>
             <C.Box1>
               <LinkCard/>
               <LinkCard/>
               <LinkCard/>
               <LinkCard/>
               <LinkCard/>
               <LinkCard/>
               <LinkCard/>
             </C.Box1>
          </C.Pag1>
          <C.Pag2 id="flashCards">
            <h1>flash Cards</h1>
            <C.BoxP2>
               <Carousell/>
            </C.BoxP2>
          </C.Pag2>
        </>
    )
}