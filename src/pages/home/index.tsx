import Carousell from "../../components/carousel"
import { LinkCard } from "../../components/linkCard"
import { Navbar1 } from "../../components/navbar"
import *as C from "./styled"
import { FixedTop } from "../../hooks/fixedTop"
import Image1 from "../../assets/imagens/cardHuman.jpg"
import Image2 from "../../assets/imagens/cell.jpg"
import Image3 from "../../assets/imagens/cardTecidoEpitelial.jpg"
import Image4 from "../../assets/imagens/tecidoAdiposo.jpg"
import Image5 from "../../assets/imagens/Loc.jpg"
import Image6 from "../../assets/imagens/cardiovascular.jpg"
import Image7 from "../../assets/imagens/sistemaNervoso.jpg"

export const Home=()=>{
  FixedTop()
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
               <LinkCard Image={Image1} theLink={"/introducao"} Title={"Introdução às ciências morfológicas"} TitleBtn={"tema 1"}/>
               <LinkCard Image={Image2} theLink={"/Tema02"} Title={"Introdução à célula"} TitleBtn={"tema 2"}/>
               <LinkCard Image={Image3} theLink={"/Tema03"} Title={"Ciclo celular e tecido epitelial"} TitleBtn={"tema 3"}/>
               <LinkCard Image={Image4} theLink={"/Tema04"} Title={"Tecido conjuntivo e adiposo"} TitleBtn={"tema 4"}/>
               <LinkCard Image={Image5} theLink={"/Tema05"} Title={"Morfologia do aparelho locomotor"} TitleBtn={"tema 5"}/>
               <LinkCard Image={Image6} theLink={"/Tema06"} Title={"Aparelho circulatório"} TitleBtn={"tema 6"}/>
               <LinkCard Image={Image7}  theLink={"/Tema07"} Title={"Sistema nervoso"} TitleBtn={"tema 7"}/>
             </C.Box1>
          </C.Pag1>
          <C.Pag2 id="flashCards">
            <h1>Slides</h1>
            <C.BoxP2>
               <Carousell/>
            </C.BoxP2>
          </C.Pag2>
        </>
    )
}