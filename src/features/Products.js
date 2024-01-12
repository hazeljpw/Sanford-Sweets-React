import { useState } from 'react';
import crinkles from '../app/assets/images/crinkles.jpg'
import coffee2 from '../app/assets/images/coffee2.jpg'
import coffee3 from '../app/assets/images/coffee3.jpg'
import coffee4 from '../app/assets/images/coffee4.jpg'
import coffee5 from '../app/assets/images/coffee5.jpg'
import coffee6 from '../app/assets/images/coffee6.jpg'

function ProductItem() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const products = [
        {
            title: 'Chocolate Crinkles',
            subtitle: 'Powdered sugar-dusted cookies with a fudgy interior, boasting a delightful balance of rich cocoa flavors and irresistible sweetness.',
            imageSrc: crinkles,
            price: '$10.00',
        },
        {
            title: 'Brazil Expresso',
            subtitle: 'Espresso embodies the perfection of a single shot espresso, brimming with intricate flavors and a subtle note of caramelized pecan..',
            imageSrc: coffee2,
            price: '$15.00',
        },
        {
            title: 'Colombia Supremo',
            subtitle: 'Smooth texture, gentle acidity, delightful orange sweetness, subtle undertones of nutty almond, and a satisfyingly sweet vanilla finish.',
            imageSrc: coffee3,
            price: '$15.00',
        },
        {
            title: 'Mexico Mocabe HG',
            subtitle: 'A rich dark chocolate notes, subtle touch of citrusy sweetness, hints of nuttiness, all culminating in a harmoniously balanced body.',
            imageSrc: coffee4,
            price: '$15.00',
        },
        {
            title: 'Jamaica Blue Mountains',
            subtitle: 'Notes of chocolate with blackberries and currants, accompanied by a smooth and velvety body, complemented by a gentle, mild acidity.',
            imageSrc: coffee5,
            price: '$15.00',
        },
        {
            title: 'Costa Rica La Gladiola',
            subtitle: 'Offers a gratifying heft on the palate, enhancing the overall sense of fulfillment during your coffee journey.',
            imageSrc: coffee6,
            price: '$15.00',
        },
    ];

    return (
        <section className="container content-section mt-5">
            <h2 className='text-center'>Connect with us on our <a href="https://www.facebook.com/groups/3623597347855866l" className='facebookLink' target="_blank" rel="noopener noreferrer">facebook</a> page to order.</h2>
            <div className="shop-items">
                {products.map((product, index) => (
                    <div className="shop-item" key={index}>
                        <span className="shop-item-title">{product.title}</span>
                        <span className="shop-item-sub-title">{product.subtitle}</span>
                        <img className="shop-item-image" src={product.imageSrc} height="200" alt="Product" />
                        <div className="shop-item-details">
                            <span className="shop-item-price">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductItem;
