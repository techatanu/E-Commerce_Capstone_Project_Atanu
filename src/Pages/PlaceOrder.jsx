import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

export const PlaceOrder = () => {
  const { cartItems, all_product } = useContext(ShopContext);


  const orderedProducts = all_product.filter(p => cartItems[p.id] > 0);

  return (
    <div style={{padding: '2rem'}}>
      <h2>Order Placed Successfully!</h2>
      <p>Thank you for your purchase. Here is your order summary:</p>
      <ul>
        {orderedProducts.map(item => (
          <li key={item.id}>
            {item.name} x {cartItems[item.id]} (₹{item.new_price * cartItems[item.id]})
          </li>
        ))}
      </ul>
      <h3>
        Total: ₹{orderedProducts.reduce((sum, item) => sum + item.new_price * cartItems[item.id], 0)}
      </h3>
    </div>
  );
};