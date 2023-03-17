import styled, { keyframes } from "styled-components";

import Imge from '../../assets/imagens/imgHome.png'
import { Keyframes } from "styled-components";

const rotate=keyframes`
to{
    transform:rotateY(45deg)
}
from{
    transform:rotate(0deg)
}
`
export const Img=styled.img.attrs({
    src:`${Imge}`
})`
   border-radius:50%;
   width:40px;
   height:40px;
   animation:${rotate} 3s linear infinite;
`