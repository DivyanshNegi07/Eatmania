import React, { useState } from 'react';
import '../styles/Navbar.css';
import brandLogo from '../assets/icon.svg';
import cartIcon from '../assets/cart.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const cartItems = useSelector(state => state.cart.cart);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setMenuOpen(false);  // close menu after search on mobile
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div className='navbar-brand' onClick={() => {navigate('/'); setMenuOpen(false);}}>
                    <img className='navbar-icon-brand' src={brandLogo} alt="brand" />
                    <h1 className='navbar-brand-Name'>EatMania</h1>
                </div>

                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Wrap links + search in one container */}
            <div className={`menu-container ${menuOpen ? 'active' : ''}`}>
                <ul className='navbar-links'>
                    <li className='nav-li-item' onClick={() => {navigate('/'); setMenuOpen(false);}}>Home</li>
                    <li className='nav-li-item' onClick={() => {navigate('/browserestaurants'); setMenuOpen(false);}}>Browse Restaurants</li>
                </ul>

                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search Food..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="search-button" onClick={handleSearch}>🔍</button>
                </div>
            </div>

            <div className='navbar-cart' onClick={() => navigate('/cart')}>
                <img src={cartIcon} alt="Cart" className='navbar-cart-icon' />
                {cartItems.length > 0 && (
                    <span className='cart-count-badge'>{cartItems.length}</span>
                )}
            </div>
        </div>
    );
}

export default Navbar;
