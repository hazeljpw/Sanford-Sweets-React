import logo from '../app/assets/images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
          <a href='/'>
              <div className='logo'>
                  <img src={logo} height='300'alt='logo' />
              </div>
          </a>
          <Navbar expand="lg" className="custom-navbar">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar ml-5">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">Order Now</Nav.Link>
                  <Nav.Link href="/">About Us</Nav.Link>
                  <Nav.Link href="/">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}
export default Header;