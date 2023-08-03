import { Row, Button, Card } from 'react-bootstrap';

function BasicExample() {
  return (
        <>
            <Row className='text-center justify-content-center'>
            <Card className='custom-introCard'>
            <Card.Body>
                <Card.Title>Chocolate Crinkles Cookies</Card.Title>
                <Card.Text>
                Originated in St. Paul, Minnesota. In the Philippines, it gains its popularity in the 80's and has been an all time favorite.
                </Card.Text>
                <Button href='/order' variant='outline-warning'>Explore</Button>
            </Card.Body>
            </Card>
            <Card className='custom-introCard'>
            <Card.Body>
                <Card.Title>Coffee</Card.Title>
                <Card.Text>
                Whole beans are sourced from different countries and custom roast to produce it's unique flavors.
                </Card.Text>
                <Button href='/order' variant='outline-warning'>Explore</Button>
            </Card.Body>
            </Card>
            </Row>
        </>
  );
}

export default BasicExample;