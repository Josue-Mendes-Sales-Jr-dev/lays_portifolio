import './styled1.css'
import * as C from "./styled"
import {Container, Navbar,Nav, Collapse} from "react-bootstrap"

export const Navbar1=()=>{

  const handleAddClass=()=>{
    let ation1=document.getElementById("add")
    let nav=document.getElementById("basic-navbar-nav")
    
    if(ation1?.classList.contains("navbar-toggler")){
      nav?.classList.remove("show")  

    } else{
      nav?.classList.add("show")  
    }

   if(ation1?.classList.contains("navbar-toggler collapse")){
       nav?.classList.remove("in")
   }
  }
    return (
        <Navbar className="nav" bg="dark" fixed="top" variant="dark" expand="lg">
          <Container >
            <Navbar.Brand > <Nav.Link href="#home"><C.Img/></Nav.Link></Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" id='add' />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="meAuto">
                <Nav.Link href="#home" onClick={handleAddClass}>Home</Nav.Link>
                <Nav.Link href="#temas" onClick={handleAddClass} >Temas</Nav.Link>
                <Nav.Link href="#flashCards" onClick={handleAddClass}>Slides</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}