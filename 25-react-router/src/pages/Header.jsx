import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header">
                <div>
                    <Link to="/" className="header-item">
                        Home
                    </Link>
                    <Link to="/products" className="header-item">
                        Product
                    </Link>
                    <Link to="/photos" className="header-item">
                        Photo
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;
