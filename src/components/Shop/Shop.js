import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDb,getStoredCart} from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] =useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
        })
    },[]);

    useEffect(()=>{
        if (products.length) {
            const savedCart =getStoredCart(products);
            const storedCart=[];
            for (const key in savedCart) {
                const addedProduct = products.find(product=>(product.key===key));
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity=quantity;
                    storedCart.push(addedProduct);
                }
                console.log(addedProduct);
                // console.log(storedCart);
            }
            setCart(storedCart);
        }
    },[products])

    // didn't understand from here
    const handleAddToCart=(product)=>{
        // console.log(product?.name);
        const newCount = [...cart, product];
        setCart(newCount);
        addToDb(product.key);
    }
    // console.log("products");
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Products :{products.length}</h2>
                {
                    products.map(product=><Product 
                        product={product} 
                        handleAddToCart={handleAddToCart}
                        key={product.key}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;