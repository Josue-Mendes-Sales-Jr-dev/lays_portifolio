import * as C from "./styled"
import {Link} from "react-router-dom"
export const LinkCard =({Image,theLink,Title,TitleBtn}:any)=>{
    return(
        <>
        <C.Container>
            <C.Img src={Image}/>
            <C.Text>
                <C.Title>{Title}</C.Title>
                <Link to={theLink}>{TitleBtn}</Link>
            </C.Text>
        </C.Container>
        </>
    )
}