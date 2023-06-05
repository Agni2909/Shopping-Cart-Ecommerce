import React ,{useContext}from 'react';
import { PRODUCT } from '../../products';
import {ShopContext} from '../../context/shop-context';
import {CartItem} from './cart-item'
import './cart.css';
import {useNavigate} from 'react-router-dom';
export const Cart=()=>{
    const {cartItems,getTotalAmount}=useContext(ShopContext);
    const totalAmount=getTotalAmount();
    const navigate=useNavigate();
    return (
        <div className="cart">
            <div>
                <h1>Your cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCT.map((product)=>{
                    if(cartItems[product.id]!==0){
                        return <CartItem data={product}/>
                    }

                })}
            </div>
            {totalAmount>0?(
            <div className="checkout">
                <p>subtotal:${totalAmount}</p>
                <button onClick={()=>navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>):(<h1>Your Cart is Empty</h1>)}
        </div>
    )
}