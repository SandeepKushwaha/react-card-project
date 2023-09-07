import React from "react";
import './CardItem.css';

// class based component
class CardItem extends React.Component {

    constructor() { 
        super();
        this.state = {
            title: 'Smart Phone',
            price: 12999,
            quantity: 1,
            image: '',
        };
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log('increase: called!');
        console.log('This Object:', this);
        console.log('This Object State:', this.state);
    }

    render() {
        const { title, price, quantity, image } = this.state;
        return (
            <div className="card-item">
                <div className="left-block">
                    <img style={styles.image} src={ image } alt="" />
                </div>
                <div className="right-block">
                    <div style={styles.title}>{ title }</div>
                    <div style={styles.description}>Rs: { price }</div>
                    <div style={ {color: "#777"} }>Quantity: { quantity }</div>
                    <div className="card-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3161/3161837.png"
                            onClick={ this.increaseQuantity }
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/2040/2040522.png"
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                        />
                    </div>
                </div>
            </div>
        );
    }
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

export default CardItem;