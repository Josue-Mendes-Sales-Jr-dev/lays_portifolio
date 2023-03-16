import Carousell from "../../components/carousel"
import { LinkCard } from "../../components/linkCard"
import { Navbar1 } from "../../components/navbar"
import *as C from "./styled"


export const Home=()=>{
  
  
 
    return(
        <>
          
          <C.Container id="home">
          <Navbar1/>
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
               <LinkCard theLink={"/introducao"} Title={"Demo01"}/>
               <LinkCard theLink={"/demo02"} Title={"Demo02"}/>
               <LinkCard theLink={"/demo03"} Title={"Demo03"}/>
               <LinkCard theLink={"/demo04"} Title={"Demo04"}/>
               <LinkCard theLink={"/demo05"} Title={"Demo05"}/>
               <LinkCard theLink={"/demo06"} Title={"Demo06"}/>
               <LinkCard  theLink={"/demo07"} Title={"Demo07"}/>
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