import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('default');

 
  let filteredProducts = all_product.filter(item => props.category === item.category);


  if (sortOrder === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.new_price - b.new_price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts.sort((a, b) => b.new_price - a.new_price);
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} Products
        </p>
        <div className="shopcategory-sort">
          <label htmlFor="sort-select" className="sort-label">Sort by:</label>
          <select
            id="sort-select"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item, index) => (
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
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};