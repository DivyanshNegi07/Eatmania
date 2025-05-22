import React from 'react'
import '../styles/Header.css'
import banner from '../assets/banner.svg'
import iconSearch from '../assets/iconsearch.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Header({onScrollToCategories}) {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = ()=>{
        if(searchQuery.trim()){
            navigate(`/restaurantSearch?query=${encodeURIComponent(searchQuery.trim())}`)
            setSearchQuery('');
        }
    }
  
  return (
    
    <div className="header-container">
      <img src={banner} alt="Banner" className="header-banner" />
      <button className="header-button" onClick={onScrollToCategories}>Explore Categories</button>
      <div className='header-search'>
        <input className="header-search-bar" 
          placeholder='Search Restaurant' 
          onChange={(e)=> setSearchQuery(e.target.value)}
          value={searchQuery}/>
        <img src={iconSearch} alt="" className='search-icon' onClick={handleSearch} />
      </div>
    </div>

  )
}

export default Header
