import logo from '../app/assets/images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <a href='/'>
              <div className='logo'>
                  <img src={logo} height='300' alt='logo' />
              </div>
          </a>
          <Navbar sticky='top' expand="lg" className="custom-navbar">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar ml-5">
                  <Nav.Link as={NavLink} to='/' className='px-4 fa fa-home fa-lg'> Home</Nav.Link>
                  <Nav.Link as={NavLink} to='/order' className='px-4 fa fa-cart-plus fa-lg'> Order Now</Nav.Link>
                  <Nav.Link as={NavLink} to='/about' className='px-4 fa fa-list-alt fa-lg'> About Us</Nav.Link>
                  <Nav.Link as={NavLink} to='/contact' className='px-4 fa fa-address-card fa-lg'> Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}
export default Header;