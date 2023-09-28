import Carousel from 'react-bootstrap/Carousel';
import pop4 from './img/banner1.png';


function CONT(){
    return( <Carousel className='ar1' data-bs-theme="dark">

    <Carousel.Item >
    <Carousel.Caption>
        <h5>FURNITURE</h5>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo.</p>
      </Carousel.Caption>
      <img
      
        className="d-block w-100"
        src={pop4}
        alt="First slide"
      />
    </Carousel.Item >
    <Carousel.Item className='ar1'>
    <Carousel.Caption>
        <h5>FURNITURE</h5>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo.</p>
      </Carousel.Caption>
      <img
        className="d-block w-100"
        src={pop4}
        alt="Second slide"
      />
      
    </Carousel.Item>
    <Carousel.Item className='ar1'>
    <Carousel.Caption>
        <h5>FURNITURE</h5>
        <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo.
        </p>
      </Carousel.Caption>
      <img
        className="d-block w-100"
        src={pop4}
        alt="Third slide"
      />
     
    </Carousel.Item>
  </Carousel>);
}
export default CONT