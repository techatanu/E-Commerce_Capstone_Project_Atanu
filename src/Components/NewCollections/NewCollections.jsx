import React, {useContext} from 'react'
import { Item } from '../Item/Item';
import './NewCollections.css'
import { ShopContext } from '../../Context/ShopContext';
export const NewCollections = () => {
  const {all_product} = useContext(ShopContext);

  const newCollections = all_product.slice(0, 8);
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className="collections">
            {newCollections.map((item,index)=>{
                return <Item 
                key={index} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} />
            })}
        </div>
    </div>
  );
};