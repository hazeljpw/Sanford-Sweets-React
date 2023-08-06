import { useState } from 'react';
import { 
  Container,
   Collapse,
   Button,
   Card,
   CardHeader,
   CardBody
} from 'reactstrap';

const AboutAccordion = () => {
  const [collapseOne, setCollapseOne] = useState(false);
  const [collapseTwo, setCollapseTwo] = useState(false);
  const [collapseThree, setCollapseThree] = useState(false);

  const toggleCollapse = (collapseName) => {
    switch (collapseName) {
      case 'collapseOne':
        setCollapseOne(!collapseOne);
        break;
      case 'collapseTwo':
        setCollapseTwo(!collapseTwo);
        break;
      case 'collapseThree':
        setCollapseThree(!collapseThree);
        break;
      default:
        break;
    }
  };

  return (
    <Container mt-5>
        <div class="text-white ml-4 mt-5">
            <h5>Sanford Sweet is located in the Sanford, Florida. We are currently delivering all products wth no additional charges in Central Florida locations.</h5>
        </div>

        <br/>

        <Card>
            <CardHeader className="custom-accordion">
              <Button
                color="outline-warning"
                block
                className="text-left"
                onClick={() => toggleCollapse('collapseOne')}
              >
              Our Goal
              </Button>
            </CardHeader>

            <Collapse isOpen={collapseOne} id="collapseOne">

            <CardBody className="text-left">
              Our main objective is to promote cultural diversity through our delicious baked goods and coffee offerings. We are passionate about showcasing various cultures through the flavors and aromas of our products. To uphold our commitment to quality and sustainability, we give utmost importance to using organic ingredients in our baked goods. This ensures that our treats not only taste great but also align with our values of supporting organic farming practices that are healthier for both people and the environment. In addition, we take pride in partnering with organic and sustainable coffee distributors, who share our vision of responsible sourcing, fair trade, and protecting the planet. By doing so, we strive to create a welcoming space where customers can enjoy the richness of different cultures while knowing that their choices contribute to a more sustainable world.
            </CardBody>
            </Collapse>
        </Card>

        <Card>
          <CardHeader className="custom-accordion">
            <Button
              color="outline-warning"
              block
              className="text-left collapsed"
              onClick={() => toggleCollapse('collapseTwo')}
            >
            Current Products
            </Button>
          </CardHeader>

          <Collapse isOpen={collapseTwo} id="collapseTwo">

          <CardBody className="text-left">
              Discover the delightful world of our Chocolate Crinkles, available in three delectable options. Indulge in the rich flavors and textures of our traditional, cake-like, or creatively flavored variations. Pair your treat with our exceptional coffee, available as roasted whole beans or convenient ground coffee. With a focus on sustainability, we source organic ingredients and partner with responsible distributors. Experience the fusion of cultures through our baked goods and coffee, knowing that your enjoyment supports a greener and more diverse world.
          </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader className="custom-accordion">
              <Button
                color="outline-warning"
                block
                className="text-left collapsed"
                onClick={() => toggleCollapse('collapseThree')}
              >
              Future Products
              </Button>
          </CardHeader>

          <Collapse isOpen={collapseThree} id="collapseThree">

          <CardBody className="text-left">
              We are committed to an ongoing exploration of bake recipes from diverse countries, ensuring a continuous infusion of cultural flavors into our offerings. Our passion for culinary diversity drives us to expand our repertoire of baked goods, constantly seeking new recipes and techniques to delight our customers. Additionally, we are dedicated to broadening our selection of coffees, sourcing beans from various regions and expanding our range of flavors and profiles. By constantly innovating and embracing the rich tapestry of global cuisine, we strive to provide a dynamic and ever-evolving experience that celebrates the diversity of tastes and aromas from around the world.
          </CardBody>
          </Collapse>
        </Card>
    </Container>
  );
};

export default AboutAccordion;