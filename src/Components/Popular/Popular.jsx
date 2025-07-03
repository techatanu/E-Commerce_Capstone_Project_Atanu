import React, { useContext } from 'react'
import './Popular.css'
import { ShopContext } from '../../Context/ShopContext';
import { Item } from '../Item/Item';

export const Popular = () => {
  const { all_product } = useContext(ShopContext);
  
  const popularProducts = all_product.filter(item => item.category === "women");
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr /> 
        <div className="popular-item">
            {popularProducts.map((item,index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}