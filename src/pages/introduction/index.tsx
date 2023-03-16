import * as C from "./styled"
import { useEffect } from "react"
import {Link} from "react-router-dom"
import {TbArrowBackUp} from "react-icons/tb"


export const Introduction=()=>{
    const handleLoad=()=>{
        if(window.scrollY > 0){
         window.scrollTo(0,0)
        }
    }
    useEffect(()=>{
     handleLoad();
    },[])
     return(
          <>
         <C.Container >
           <C.BackButton>
           <Link to="/"><TbArrowBackUp/>Voltar</Link>
           </C.BackButton>
           
           <C.Title>
           Introdução às ciências morfológicas
           </C.Title>
           <C.Img />
           <C.TextBox>
               <C.TextBox01>
               <C.TitleH2>
               Conceitos básicos
               </C.TitleH2>
               <ul>
                  <li>Holotopia: compara uma estrutura em relação ao corpo todo. Ex: a bexiga urinária está na cavidade pélvica (holotopia da bexiga);</li>
                  <li>Esqueletopia: relaciona uma estrutura com elementos do esqueleto. Ex: o coração está posteriormente ao esterno e anteriormente às vértebras torácicas;</li>
                  <li>Sintopia: relaciona um órgão às estruturas circunvizinhas a ele. Ex: o coração está superiormente ao diafragma, inferiormente ao timo, anteriormente aos pulmões;</li>
                  <li>Idiotopia: compara partes de um mesmo órgão. Ex: os átrios estão superiores aos ventrículos.</li>
               </ul>
               <C.TitleH2>
                Morfologia dos órgãos
               </C.TitleH2>
                 <ul>
                    <li>Forma: comparação com algo que lembre o formato. Ex: o rim tem formato de feijão;</li>
                    <li>Faces: superfícies planas;</li>
                    <li>Margens: partes que ligam as faces;</li>
                    <li>Polos: extremidades</li>
                 </ul>
               <C.TitleH2>
               Membrana mucosa e serosa
               </C.TitleH2>
               <ul>
                  <li>Mucosa: membrana de todo epitélio em que há saída para a luz, ou para fora do corpo.</li>
                  <li> Serosa: membrana de todo epitélio interno aos órgã</li>
               </ul>
               <C.TitleH2>
               Princípios de formação do corpo
               </C.TitleH2>
                 <ul>
                    <li>Princípio da antimeria: o corpo pode ser dividido em duas metades, lado esquerdo e direito, quando cortado no plano sagital.</li>
                    <li>Princípio da paquimeria: separa o corpo em ventral e dorsal, quando cortado no plano de secção frontal.</li>
                    <li>Princípio da metameria: separa o corpo em cranial e caudal, quando cortado no plano transversal. Só há metâmero perfeito na fase de embrião.</li>
                    <li>Princípio da estratigrafia: o corpo é formado por camadas, como a “cebola”.</li>
                    <li>Princípio da segmentação: o órgão é formado por vários segmentos funcionalmente independentes.</li>
                 </ul>

               </C.TextBox01>
               <form action="#">
                  <input type="file" name="map" id="map" />
               </form>
               
               </C.TextBox>
              
               
         </C.Container>
         </>)
}