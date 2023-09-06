import React from "react";
import './CardItem.css';

// class based component
class CardItem extends React.Component {
    render() {
        return (
            <div className="card-item">
                <div className="left-block">
                    <img style={styles.image} src="" alt="" />
                </div>
                <div className="right-block">
                    <div style={styles.title}>Phone</div>
                    <div style={styles.description}>Rs: 999</div>
                    <div style={ {color: "#777"} }>Quntity: 1</div>
                    <div className="card-item-actions">
                        {/* Buttons */}
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