import './Navbar.css';

// Function Based Component
const Navbar = (props) => {
    return (
        <header>
            <div className="App-Title">
                <span>Card App</span>
            </div>
            <nav>
                <ul>
                    <li>
                        {/* <a href="./index.html >" */}
                        <div>
                            <img className="cart-img" src="https://www.freeiconspng.com/uploads/basket-cart-icon-27.png" alt="cart" />
                            <span className="cart-item-count" >{ props.count }</span>
                        </div>
                        {/* </a> */}
                    </li>
                    <li>
                        <a href="./profile.html">Account</a>
                    </li>
                </ul>                
            </nav>
        </header>
    );
}

export default Navbar;