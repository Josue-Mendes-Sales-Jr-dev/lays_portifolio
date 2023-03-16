import * as C from "./styled"
import {Link} from "react-router-dom"
import {useEffect} from "react"


export const Demo07=()=>{
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
          <Link to="/">Voltar</Link>
          </C.BackButton>
          
          <C.Title>
            Titulo
          </C.Title>
          <C.Img />
          <C.TextBox>
              <C.TextBox01>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, odit. Inventore et sunt consectetur perferendis, iste explicabo vel molestiae dicta assumenda recusandae, illo pariatur molestias
               cum corporis quisquam delectus enim.
              </C.TextBox01>
              <C.TextBox02>
              <C.Title>
               Titulo
              </C.Title>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus ex quis earum aliquid consequatur molestias. Nulla hic quibusdam unde nostrum, in nobis iusto rem adipisc
              i? Aliquid eveniet sit voluptatibus?
              </C.TextBox02>
              </C.TextBox>
              <C.TextBoxPart02>
                <C.Img01 />
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, odit. Inventore et sunt consectetur perferendis, iste explicabo vel molestiae dicta assumenda recusandae, illo pariatur molestias
                   cum corporis quisquam delectus enim.
                 </p>
              
              <C.T>
                <C.Title>
               Titulo
              </C.Title>
            
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, odit. Inventore et sunt consectetur perferendis, iste explicabo vel molestiae dicta assumenda recusandae, illo pariatur molestias
                   cum corporis quisquam delectus enim.
                 </p>
              
              </C.T>
              <C.Img02/>
              </C.TextBoxPart02>

          
          
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, odit. Inventore et sunt consectetur perferendis, iste explicabo vel molestiae dicta assumenda recusandae, illo pariatur molestias
                   cum corporis quisquam delectus enim.
                 </p>
              
        </C.Container>
        </>
    )
}