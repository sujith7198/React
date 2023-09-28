import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import im1 from './img/img1.png';
import Image from 'react-bootstrap/Image';

function BODY(){
    return( 
    <Container className='bd'>
        <Row >
          <Col className='bd-a'>
          <Card className='bd-c mt-5'>
      
      <Card.Body  className='bd-a p-5'>
        <Card.Title>ABOUT US</Card.Title>
        <Card.Text>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able
        </Card.Text>
        <Button variant="dark">READ MORE</Button>
      </Card.Body>
    </Card>
    </Col >
          <Col className='bd-b' >
        <Image src={im1} rounded />
        </Col>
        </Row>
      </Container>)
}
export default BODY
