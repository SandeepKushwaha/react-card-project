import React from "react";
import './CartItem.css';

// class based component
const CartItem = (props) => {

    const { title, price, quantity, image } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className="card-item">
            <div className="left-block">
                <img style={styles.image} src={ image } alt="" />
            </div>
            <div className="right-block">
                <div style={ styles.title }>{ title }</div>
                <div style={ styles.description }>Rs: { price }</div>
                <div style={ {color: "#777"} }>Quantity: { quantity }</div>
                <div className="card-item-actions">
                    {/* Buttons */}
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/3161/3161837.png"
                        onClick={ () => onIncreaseQuantity(product) }
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/2040/2040522.png"
                        onClick={ () => onDecreaseQuantity(product) }
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                        onClick={ () => onDeleteProduct(product.id) }
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 10,
        background: '#CCC',
    },
    title: {
        fontSize: 24,
    },
    description: {
        color: "#777",
    },
};

export default CartItem;