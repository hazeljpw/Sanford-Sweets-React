import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container>
        <Row className='align-items-center justify-content-center text-center'>
          <Col xs={10} sm={4} md={3}>
                  <ul className="list-unstyled">
                      <li><a href="/" rel="noopener noreferrer" className="custom-link">Home</a></li>
                      <li><a href="/order" rel="noopener noreferrer" className="custom-link">Order Now</a></li>
                      <li><a href="/about" rel="noopener noreferrer" className="custom-link">About Us</a></li>
                  </ul>
          </Col>
          <Col xs={10} sm={3} md={3} className='text-center'>
            <div className='d-flex justify-content-center'>
              <a className='btn btn-social-icon btn-outline-warning mr-2' href='https://www.facebook.com/groups/3623597347855866l' target="_blank" rel="noopener noreferrer">
                <i className='fa fa-facebook' />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={4} md={2} className="text-center">
            <br />
            <a role='button' className='custom-link' href='mailto:notreal@notreal.co'>
              <i className='fa fa-envelope-o'/>sanfordsweets@outlook.com
            </a>
          </Col>
        </Row>
      </Container>

      <br/>

      <Container className='text-center text-white '>
            <p className='text-center'><strong>COPYRIGHT © 2023 SANFORD SWEETS - ALL RIGHTS RESERVED</strong></p>
        </Container>
    </footer>
  );
};

export default Footer;
