import React from "react";
import CartItem from "./CartItem";
import './Cart.css';

const Cart = (props) => {

    const { products } = props;
    return (
        <div className="cart">
            <h1 className="cart-title">My Cart</h1>
            <div className="cart-items">
                { products.map((product) => { 
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQuantity = { props.onIncreaseQuantity }
                            onDecreaseQuantity = { props.onDecreaseQuantity}
                            onDeleteProduct = { props.onDeleteProduct } 
                        />
                    );
                }) }
            </div>
        </div>
    );
}

export default Cart;