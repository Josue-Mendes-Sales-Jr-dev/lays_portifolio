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
               <LinkCard theLink={"/introducao"} Title={"Introdução às ciências morfológicas"} TitleBtn={"tema 1"}/>
               <LinkCard theLink={"/demo02"} Title={"Introdução à célula"} TitleBtn={"tema 2"}/>
               <LinkCard theLink={"/demo03"} Title={"Ciclo celular e tecido epitelial"} TitleBtn={"tema 3"}/>
               <LinkCard theLink={"/demo04"} Title={"Tema 4"} TitleBtn={"tema 4"}/>
               <LinkCard theLink={"/demo05"} Title={"Tema 5"} TitleBtn={"tema 5"}/>
               <LinkCard theLink={"/demo06"} Title={"Tema 6"} TitleBtn={"tema 6"}/>
               <LinkCard  theLink={"/demo07"} Title={"Tema 7"} TitleBtn={"tema 7"}/>
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