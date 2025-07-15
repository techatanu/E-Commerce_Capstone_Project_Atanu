import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
export const Item = (props) => {
  const hasDiscount = props.old_price > props.new_price;
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}>
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={process.env.PUBLIC_URL + '/' + props.image}
            alt={props.name}
          />
        </Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div
              className="item-price-new"
              style={{ color: '#ff4141', fontWeight: 700 }}
            >
              ₹{props.new_price}
            </div>
            {hasDiscount && (
              <div
                className="item-price-old"
                style={{
                  color: 'gray',
                  textDecoration: 'line-through',
                  marginLeft: 8,
                  fontWeight: 600,
                }}
              >
                ₹{props.old_price}
              </div>
            )}
        </div>
    </div>
  )
}