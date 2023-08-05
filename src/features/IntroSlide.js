import Carousel from 'react-bootstrap/Carousel';
import coffee from '../app/assets/images/coffee.jpg';
import flour from '../app/assets/images/flour.jpg'

function IntroSlide() {
  return (
    <div className="container">
            <div className="col-sm-8 mx-auto p-3">
                <Carousel className="carousel slide carousel-fade">
                    <Carousel.Item>
                        <img className="d-block w-100" src={flour} alt="Sprinkled-flour" />
                        <Carousel.Caption>
                            <h3>Baked Goods</h3>
                            <p className="d-none d-sm-block">Dicover variety of pastries and breads from diverse culinary traditions<form action=""></form></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={coffee} alt="Coffee" />
                        <Carousel.Caption>
                            <h3>Whole & Ground Coffee Beans</h3>
                            <p className="d-none d-sm-block">Experience an array of distinctive coffee bean seections from various corners of the globe</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    </div>
  );
}

export default IntroSlide;