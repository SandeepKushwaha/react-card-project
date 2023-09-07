import React from "react";
import CartItem from "./CartItem";
import './Cart.css';

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                <h1 className="cart-title">My Cart</h1>
                <div className="cart-items">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        );
    }
}

export default Cart;