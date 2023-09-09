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

    handleIncreaseQuantity = (product) => {
        console.log('Hay Please increase the quantity of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].quantity += 1;
        
        this.setState({
            // products: products
            products
        });
    }

    handleDecreaseQuantity = (product) => {
        console.log('Hay Please decrease the quantity of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if (products[index].quantity > 1) {
            products[index].quantity -= 1;
        } else {
            console.log(`Cart Item of current item: '${product.title}' can not be less then 1`);
        }
        
        this.setState({
            // products: products
            products
        });
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
                                onIncreaseQuantity={ this.handleIncreaseQuantity }
                                onDecreaseQuantity={ this.handleDecreaseQuantity }
                            />
                        );
                    }) }
                </div>
            </div>
        );
    }
}

export default Cart;