import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
  return (
  <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="/" className='text-white'>Home</Nav.Link>
        <Nav.Link href="about" className=' text-white'>About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
}