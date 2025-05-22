import React, { useState } from 'react'
import '../styles/Navbar.css'
import brandLogo from '../assets/icon.svg';
import searchIcon from  '../assets/search.svg';
import cartIcon from '../assets/cart.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';  // import cart data from redux store
//https://api.spoonacular.com/food/menuItems/search?query=burger&number=2
function Navbar() {
    const cartItems = useSelector(state=>state.cart.cart)
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = ()=>{
        if(searchQuery.trim()){
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`)
            setSearchQuery('');
        }
    }

    const handleKeyDown = (e)=>{
        if(e.key === 'Enter') handleSearch();
    };

    return (
        <div className='navbar'>
            <div className='navbar-brand' onClick={() => navigate('/')}>
                <img className='navbar-icon-brand'src={brandLogo} alt="brand" />
                <h1 className='navbar-brand-Name'>EatMania</h1>

            </div>
            
            <ul className='navbar-links'>
                <li className='nav-li-item' onClick={() => navigate('/')}>Home</li>        
                <li className='nav-li-item' onClick={() => navigate('/browserestaurants')}>Browse Restaurants</li>        

            </ul>
            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Search Food..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="search-button" onClick={handleSearch}>🔍</button>
            </div>
            <div className='navbar-cart' onClick={() => navigate('/cart')}>
                <img src={cartIcon} alt="Cart" className='navbar-cart-icon' />
                {cartItems.length > 0 && (
                    <span className='cart-count-badge'>{cartItems.length}</span>
                )}
            </div>

        
        </div>
    )
}

export default Navbar
