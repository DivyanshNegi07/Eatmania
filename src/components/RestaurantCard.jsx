import React from 'react'
import '../styles/RestaurantCard.css'
import { useNavigate } from 'react-router'

function RestaurantCard({ name, image, cuisine, rating }) {
  
  const navigate = useNavigate();
  const handleRestaurantMenuSearch = (RestaurantName)=>{
    navigate(`/restaurantSearch?query=${encodeURIComponent(RestaurantName)}`)
  }
  
  return (
      <div className="restaurant-card">
      <img src={image} alt={name} />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <div className="details">
          <span>⭐ {rating}</span>
        </div>
        <button onClick={()=> handleRestaurantMenuSearch(name)}>View Menu</button>
      </div>
    </div>
      
    
  )
}

export default RestaurantCard
