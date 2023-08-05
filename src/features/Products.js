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
            subtitle: 'Made with regular flour, all time favorite!',
            imageSrc: crinkles,
            price: '$10.00',
        },
        {
            title: 'Brazil: CHC Reserve Expresso',
            subtitle: 'CHC Espresso is a perfect single shot espresso rich in flavors with a hint of caramelized pecan on the finish.',
            imageSrc: coffee2,
            price: '$15.00',
        },
        {
            title: 'Colombia: El Gato Supremo',
            subtitle: 'Silky, smooth mouth feel, mild acidity, notes of sweet orange, slight nutty almond and sweet vanilla finish.Made with regular flour, all time favorite!',
            imageSrc: coffee3,
            price: '$15.00',
        },
        {
            title: 'Mexico Organic Mocabe HG',
            subtitle: 'Cups with notes of dark chocolate, a slight citrus sweetness, some nuttiness and a well-rounded body.',
            imageSrc: coffee4,
            price: '$15.00',
        },
        {
            title: 'Jamaica: Blue Mountains',
            subtitle: 'Aromas and flavors of chocolate with blackberries, and currant with a smooth velvety body, and mild acidity.',
            imageSrc: coffee5,
            price: '$15.00',
        },
        {
            title: 'Costa Rica: La Gladiola',
            subtitle: 'La Gladiola exhibits a wonderful acidity, good body with some citrus cocoa notes.',
            imageSrc: coffee6,
            price: '$15.00',
        },
        // Add more products here...
    ];

    return (
        <section className="container content-section mt-5">
            <div className="shop-items">
                {products.map((product, index) => (
                    <div className="shop-item" key={index}>
                        <span className="shop-item-title">{product.title}</span>
                        <span className="shop-item-sub-title">{product.subtitle}</span>
                        <img className="shop-item-image" src={product.imageSrc} height="200" alt="Product" />
                        <div className="shop-item-details">
                            <span className="shop-item-price">{product.price}</span>
                            <button
                                className="btn btn-outline-warning shop-item-button"
                                type="button"
                                onClick={() => addToCart(product)}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductItem;
