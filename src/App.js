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
          image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/RR/VF/HU/149926717/new-factory-price-7-3inch-reolme7-pro-plus-smartphone-4g-5g-unlock-android-mobile-8gb-256gb-original.jpg',
        },
        {
          id: 2,
          title: 'Smart Watch',
          price: 4999,
          quantity: 2,
          image: 'https://m.media-amazon.com/images/I/712+lS1mk-L.jpg',
        },
        {
          id: 3,
          title: 'Washing Machine',
          price: 22999,
          quantity: 3,
          image: 'https://www.voltasbeko.com/media/catalog/product/w/t/wtt90agrt3.jpg',
        },
        {
          id: 4,
          title: 'Dish Washer',
          price: 31999,
          quantity: 2,
          image: 'https://www.shopz.com.bd/wp-content/uploads/2023/01/Miyako-Dish-Washer-MDW60CM14ST.jpg',
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

  getCartTotal = () => {
    const { products } = this.state;

    // let total = 0;
    // products.map((product) => {
    //   total = total + (product.price * product.quantity);
    // });
  
    const total = products.reduce((accumulator, product) => {
      return accumulator + (product.price * product.quantity);
    }, 0);
  
    return total;
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
        <div className='Cart-Total'>
          <p>Total: <span className='Payable-Amount'>Rs. { this.getCartTotal() }</span></p>
        </div>
      </div>
    );
  }
}

export default App;
