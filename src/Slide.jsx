import Carousel from 'react-bootstrap/Carousel';
import pop4 from './img/icon4.png';
import pop1 from './img/img6.png';
import pop2 from './img/img5.png';
import pop3 from './img/img4.png';
function SLIDE(){
    return(
         <Carousel className='ig-1' data-bs-theme="dark">

    <Carousel.Item>
        <div className='ig'>
      <img
        className="d-block w-100"
        src={pop1}
        alt="First slide"/></div>

      <Carousel.Caption>
        <h5>MORDEN HOME DESIGN</h5>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <div className='ig'>
      <img
        className="d-block w-100"
        src={pop2}
        alt="Second slide"
      /></div>
      <Carousel.Caption>
        <h5>MORDEN HOME DESIGN</h5>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <div className='ig'>
      <img
        className="d-block w-100"
        src={pop3}
        alt="Third slide"
      /></div>
      <Carousel.Caption>
        <h5>MORDEN HOME DESIGN</h5>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>);
}
export default SLIDE