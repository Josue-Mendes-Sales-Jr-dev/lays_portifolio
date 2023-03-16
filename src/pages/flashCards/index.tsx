import  * as C from "./styled"
import {Link} from "react-router-dom"
import {TbArrowBackUp} from "react-icons/tb"
import { FCard } from "../../components/flashcard"



export const FlashCards=()=>{
    
    return(
        <>
        <C.Container>
            <C.BackButton>
               <Link to="/"> <TbArrowBackUp className="icon"/> Voltar</Link>
            </C.BackButton>
             <FCard/>
            
        </C.Container>
        </>
    )
}