import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NaBAR(){
return(
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">BUILT BETTER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">SERVICES</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#action2">SHOP</Nav.Link>
            <Nav.Link href="#action2">CONTACT</Nav.Link> 
          </Nav>           
          <Form className="d-flex">      
          <Nav.Link href="#action2">LOGIN </Nav.Link>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
 
  
) ;



}
export default NaBAR