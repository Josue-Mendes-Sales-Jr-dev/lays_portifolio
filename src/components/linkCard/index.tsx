import * as C from "./styled"
import {Link} from "react-router-dom"
export const LinkCard =()=>{
    return(
        <>
        <C.Container>
            <C.Img/>
            <C.Text>
                <Link to="/introducao">Introdução</Link>
            </C.Text>
        </C.Container>
        </>
    )
}