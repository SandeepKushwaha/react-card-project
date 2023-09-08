import React from "react";
import CartItem from "./CartItem";
import './Cart.css';

class Cart extends React.Component {

    constructor() { 
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'Smart Phone',
                    price: 12999,
                    quantity: 1,
                    image: '',
                },
                {
                    id: 2,
                    title: 'Smart Watch',
                    price: 4999,
                    quantity: 10,
                    image: '',
                },
                {
                    id: 3,
                    title: 'Washing Machine',
                    price: 22999,
                    quantity: 3,
                    image: '',
                },
                {
                    id: 4,
                    title: 'Dish Washer',
                    price: 31999,
                    quantity: 2,
                    image: '',
                },
            ],
        };
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                <h1 className="cart-title">My Cart</h1>
                <div className="cart-items">
                    {/* <CartItem price={99} title={"Watch"} quantity={1} image={''} /> */}
                    { products.map((product) => { 
                        // return <CartItem
                        //     price={product.price}
                        //     title={product.title}
                        //     quantity={product.quantity}
                        //     image={product.image}
                        // />
                        return (
                            <CartItem
                                product={product}
                                key={product.id}
                            />
                        );
                    }) }
                </div>
            </div>
        );
    }
}

export default Cart;