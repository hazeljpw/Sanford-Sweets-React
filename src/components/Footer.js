import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container>
        <Row className='align-items-center justify-content-center text-center'>
          <Col xs={10} sm={4} md={3}>
                  <ul className="list-unstyled">
                      <li><a href="/" className="custom-link">Home</a></li>
                      <li><a href="/" className="custom-link">Order Now</a></li>
                      <li><a href="/" className="custom-link">About Us</a></li>
                      <li><a href="/" className="custom-link">Contact Us</a></li>
                  </ul>
          </Col>
          <Col xs={10} sm={3} md={3} className='text-center'>
            <div className='d-flex justify-content-center'>
              <a className='btn btn-social-icon btn-outline-warning mr-2' href='http://instagram.com/'>
                <i className='fa fa-instagram' />
              </a>
              <a className='btn btn-social-icon btn-outline-warning mr-2' href='http://www.facebook.com/'>
                <i className='fa fa-facebook' />
              </a>
              <a className='btn btn-social-icon btn-outline-warning mr-2' href='http://twitter.com/'>
                <i className='fa fa-twitter' />
              </a>
              <a className='btn btn-social-icon btn-outline-warning' href='http://youtube.com/'>
                <i className='fa fa-youtube' />
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
    </footer>
  );
};

export default Footer;
