import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
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
          quantity: 2,
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

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // return arr i.e. [{id is not equal to given id}]

    this.setState({
      products: items
    });
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => { 
      count += product.quantity;
    });
    
    return count;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
          count= { this.getCartCount() }
        />
        <div className='Container'>
          <Cart
            products = { products }
            onIncreaseQuantity = { this.handleIncreaseQuantity }
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = { this.handleDeleteProduct }
          />
        </div>
      </div>
    );
  }
}

export default App;
