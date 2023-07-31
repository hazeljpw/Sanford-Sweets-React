import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
        <>
            <Row className='text-center'>
            <Card className='custom-introCard col-md-2'>
            <Card.Body>
                <Card.Title>Chocolate Crinkles Cookies</Card.Title>
                <Card.Text>
                Originated in St. Paul, Minnesota. In the Philippines, it gains its popularity in the 80's and has been an all time favorite.
                </Card.Text>
                <Button variant='outline-warning'>Explore</Button>
            </Card.Body>
            </Card>
            <Card className='custom-introCard col-md-2'>
            <Card.Body>
                <Card.Title>Coffee</Card.Title>
                <Card.Text>
                Whole beans are sourced from different countries and custom roast to produce it's unique flavors.
                </Card.Text>
                <Button className='custom-button' variant='outline-warning'>Explore</Button>
            </Card.Body>
            </Card>
            </Row>
        </>
  );
}

export default BasicExample;