import './Cart.css';
import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    let total=0;
    for (const product of cart) {
        total=total + product.price;
        // console.log(total);
    }
    const shipping=  total > 0? 7.99 : 0;
    const tax = (total + shipping) * 0.1;
    const grandTotal = (total+ shipping+tax);
    return (
        <div>
        <h2>Order Summary</h2>
        <h5>Items ordered: {cart.length}</h5> 
        {/* <p>Items : {price}</p>  */}
        <p>Total: {total.toFixed(2)}</p>          
        <p>Shipping : {shipping.toFixed(2)}</p>
        <p>Tax: {tax.toFixed(2)}</p>
        <p>Grand Total: {grandTotal.toFixed(2)}</p>          
        </div>
    );
};

export default Cart;