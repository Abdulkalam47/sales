import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [userName, setUserName] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleOrderSubmit = () => {
    if (userName && userMobile) {
      fetch('http://localhost:5000/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: userName,
          mobile: userMobile,
          products: cartItems
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Order sent successfully!');
          setOrderSubmitted(true);
        } else {
          alert('Failed to send order: ' + data.message);
        }
      })
      .catch(error => {
        alert('Error sending order: ' + error.message);
      });
    } else {
      alert('Please enter your name and mobile number.');
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>Price: {item.price}rs</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="user-details">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Your Mobile Number" 
              value={userMobile} 
              onChange={(e) => setUserMobile(e.target.value)} 
            />
          </div>
          <button className="btn" onClick={handleOrderSubmit}>Submit Order</button>
          {orderSubmitted && <p>Order has been submitted successfully!</p>}
        </>
      )}
    </div>
  );
};

export default Cart;
