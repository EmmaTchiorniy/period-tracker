import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation-bar.scss';

export default function NavigationBar() {
  return (
  <Navbar bg="light" data-bs-theme="light" fixed="bottom" className='h-20 bg-[#f3f3f3]'>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Container>
      <Nav className='nav-items pt-4'>
          <Nav.Link href="/" className='text-black'>Home</Nav.Link>
          <Nav.Link href="/track" className=' text-black'>Track</Nav.Link>
          <Nav.Link href="/account" className=' text-black'>Account</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
}