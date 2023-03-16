import * as C from "./styled"
import { FixedTop } from "../../hooks/fixedTop"
import {Link} from "react-router-dom"
import {TbArrowBackUp} from "react-icons/tb"

export const Demo05=()=>{
    FixedTop()
     return(
          <>
         <C.Container >
           <C.BackButton>
           <Link to="/"><TbArrowBackUp/>Voltar</Link>
           </C.BackButton>
           
           <C.Title>
           Ciclo celular e tecido epitelial          
           </C.Title>
           <C.Img />
           <C.TextBox>
              
        
                   REFERÊNCIA:
               <C.TextBox01>
               </C.TextBox01>
                
               
               </C.TextBox>
              
               
         </C.Container>
         </>)}