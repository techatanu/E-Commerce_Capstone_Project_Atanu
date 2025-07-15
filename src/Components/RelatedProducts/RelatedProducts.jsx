import React, { useContext } from 'react';
import './RelatedProducts.css';
import { ShopContext } from '../../Context/ShopContext';
import { Item } from '../Item/Item';

export const RelatedProducts = ({ category, excludeId }) => {
  const { all_product } = useContext(ShopContext);


  const related = all_product.filter(
    (item) => item.category === category && item.id !== excludeId
  ).slice(0, 4); 

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};