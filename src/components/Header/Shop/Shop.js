import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const first20 = fakeData.slice(0,20);
    const [products, setproducts] = useState(first20)
    const [cart, setcart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setcart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleAddProduct = {handleAddProduct} product = {product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;