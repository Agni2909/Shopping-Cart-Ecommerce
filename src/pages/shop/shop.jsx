import React from 'react';
import {Product} from './product'
import {PRODUCT} from '../../products'
import './shop.css';
export const Shop=()=>{
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Amaze Shop for Shopping items</h1>
            </div>
            <div className="products">
                {PRODUCT.map((product)=>(
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}