import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);
    const {name,img,price,stock,star,seller}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""  />
            </div>
            <div className="">
                <h3 className="product-text">{name}</h3>
                <p><small>by: </small>  {seller}</p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <p>{star}</p>
                {/* didn't understnd from here. specifically event handler */}
                <button onClick={()=>props.handleAddToCart(props.product)} className="btn-regular">{element} add to cart</button>
            </div>

        </div>
    );
};

export default Product;