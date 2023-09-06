import './Header.css';

// Function Based Component
function Header() {
    return (
        <header>
            <div className="App-Title">
                <span>Card App</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="index.html">Card</a>
                    </li>
                    <li>
                        <a href="./profile.html">Account</a>
                    </li>
                </ul>                
            </nav>
        </header>
    );
}

export default Header;