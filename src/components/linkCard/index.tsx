import * as C from "./styled"
import {Link} from "react-router-dom"
export const LinkCard =({theLink,Title}:any)=>{
    return(
        <>
        <C.Container>
            <C.Img/>
            <C.Text>
                <C.Title>Introdução às ciências morfológicas</C.Title>
                <Link to={theLink}>{Title}</Link>
            </C.Text>
        </C.Container>
        </>
    )
}