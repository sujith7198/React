import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pop1 from './img/icon1.png';
import pop2 from './img/icon2.png';
import pop3 from './img/icon3.png';
import pop4 from './img/icon4.png';


function CARDS(props){
    
    return(
        <div className='cd'>
            <h3>OUR SERVICES</h3>
            <p>There are many variations of passages of Lorem Ipsum</p>
            <Container>
      <Row>
        <Col  className='cd1'> 
        <Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={pop2}/>
    <Card.Body>
      <Card.Title>OFFICE</Card.Title>
      <Card.Text>
      There are many variations of passages of Lorem Ipsum available, but the
      </Card.Text>
      <Button variant="warning">READ MORE</Button>
    </Card.Body>
  </Card>

  </Col>
        <Col className='cd2'>
        <Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={pop1} />
    <Card.Body>
      <Card.Title>FURNITURES</Card.Title>
      <Card.Text>
      There are many variations of passages of Lorem Ipsum available, but the
      </Card.Text>
      <Button variant="warning">READ MORE</Button>
    </Card.Body>
  </Card></Col>

        <Col className='cd3'><Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={pop3} />
    <Card.Body>
      <Card.Title>HOME</Card.Title>
      <Card.Text>
      There are many variations of passages of Lorem Ipsum available, but the
      </Card.Text>
      <Button variant="warning">READ MORE</Button>
    </Card.Body>
  </Card>
  </Col>

        <Col className='cd4'><Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={pop4} />
    <Card.Body>
      <Card.Title>BADROOM</Card.Title>
      <Card.Text>
      There are many variations of passages of Lorem Ipsum available, but the
      </Card.Text>
      <Button variant="warning">READ MORE</Button>
    </Card.Body>
  </Card></Col>
      </Row>
    </Container>
       
  </div>
  );
}
export default CARDS