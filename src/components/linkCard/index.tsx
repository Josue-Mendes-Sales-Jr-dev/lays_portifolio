import * as C from "./styled"
import {Link} from "react-router-dom"
export const LinkCard =({theLink,Title,TitleBtn}:any)=>{
    return(
        <>
        <C.Container>
            <C.Img/>
            <C.Text>
                <C.Title>{Title}</C.Title>
                <Link to={theLink}>{TitleBtn}</Link>
            </C.Text>
        </C.Container>
        </>
    )
}