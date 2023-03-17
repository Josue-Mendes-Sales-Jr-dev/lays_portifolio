import './styled1.css'
import * as C from "./styled"
import {Link} from "react-router-dom"
import {Container, Navbar,Nav} from "react-bootstrap"
export const Navbar1=()=>{
    return (
        <Navbar className="nav" bg="dark" fixed="top" variant="dark" expand="lg">
          <Container >
            <Navbar.Brand > <Link to="/"><C.Img/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="meAuto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#temas">Temas</Nav.Link>
                <Nav.Link href="#flashCards">Slides</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}