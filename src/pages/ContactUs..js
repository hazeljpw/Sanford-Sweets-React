import ContactOptions from "../features/ContactOptions";
import ContactForm from "../features/ContactForm";
import { Container, Row, Col } from "reactstrap";

const ContactUs = () => {
    return (
        <Container>

        <Row className='row-content align-items-center'>
            <Col sm='4'>
                <ContactOptions/>
            </Col>
        </Row>

        <Row className='row-content'>
        <Col>
            <h4>Or send us your inquiry here:</h4>
            </Col>
            <Col xs='12'>
                <hr />
            </Col>
            
            <Col md='10'>
                <ContactForm />
            </Col>
        </Row>
    </Container>
    )
}

export default ContactUs;