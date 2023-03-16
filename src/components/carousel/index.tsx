import Carousel from 'react-bootstrap/Carousel';
import Image3 from "../../assets/imagens/cardHuman.jpg"
import Image2 from "../../assets/imagens/tecidoAdiposo.jpg"
import Image1 from "../../assets/imagens/cardiovascular.jpg"
import "./carousel.css"
import { Link } from 'react-router-dom';
function Carousell() {
  return (
    <Carousel className='BoxCarousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Link className='linkCarousel' to="/flashCards">Flashcards</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <Link className='linkCarousel' to="/flashCards">Flashcards</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Link className='linkCarousel' to="/flashCards">FlashcArds</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
