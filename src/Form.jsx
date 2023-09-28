import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import im2 from './img/img9.png';
import Image from 'react-bootstrap/Image';

function FORM(){    
    return(
        
        <Container className='fr'>
        <Row>
          <Col><Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="NAME" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Phonumber" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Message" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        SEND
      </Button>
    </Form></Col >
    <Col className='im2'>
            <Image src={im2} rounded /></Col>

        </Row>
        
      </Container>
    );
}
export default FORM
