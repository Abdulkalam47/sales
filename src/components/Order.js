import React, { useState } from 'react';
import { useCart } from './CartContext';
import './order.css';
import ultratechCementImage from '../images/ultratech-cement.jpg';
import jkCementImage from '../images/jk-cement.png';
import whiteCementImage from '../images/white-cement.jpg';
import bricksMSImage from '../images/bricks-ms.png';
import bricksMS1Image from '../images/bricks-ms1.png';
import astralImage from '../images/astral.jpg';
import ultratechChemImage from '../images/ultratech-chem.png';
import asianPaintsImage from '../images/asian-paints.jpg';

const Order = () => {
  const { addToCart } = useCart();

  const handleBuy = (product) => {
    const userQuantity = prompt(`How many ${product.name} do you want to buy?`, '1');
    const quantity = parseInt(userQuantity, 10);

    if (!isNaN(quantity) && quantity > 0) {
      addToCart({ ...product, quantity });
      alert(`${product.name} added to cart with quantity: ${quantity}!`);
    } else {
      alert('Please enter a valid quantity.');
    }
  };

  const products = [
    { id: 1, name: 'Ultratech Cement', category: 'Cement', price: 390, image: ultratechCementImage },
    { id: 2, name: 'JK Cement', category: 'Cement', price: 380, image: jkCementImage },
    { id: 3, name: 'White Cement', category: 'Cement', price: 45, image: whiteCementImage },
    { id: 4, name: 'Bricks MS', category: 'Bricks', price: 8, image: bricksMSImage },
    { id: 5, name: 'Bricks MS1', category: 'Bricks', price: 9, image: bricksMS1Image },
    { id: 6, name: 'Astral', category: 'Chemical', price: 500, image: astralImage },
    { id: 7, name: 'Ultratech Chem', category: 'Chemical', price: 500, image: ultratechChemImage },
    { id: 8, name: 'Asian Paints', category: 'Chemical', price: 500, image: asianPaintsImage },
  ];

  const categorizedProducts = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <main>
      <section className="order-page">
        <h2>Order Products</h2>
        {Object.keys(categorizedProducts).map((category) => (
          <div key={category} className="category-section">
            <h3>{category}</h3>
            <div className="product-list">
              {categorizedProducts[category].map((product) => (
                <div className="product" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>Price: {product.price}₹</p>
                  <button className="btn" onClick={() => handleBuy(product)}>Buy</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Order;
