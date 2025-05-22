import React from 'react';
import RestaurantCard from '../components/RestaurantCard'; 
import '../styles/BrowseRestaurants.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';


function BrowseRestaurants() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = ()=>{
        if(searchQuery.trim()){
            navigate(`/restaurantSearch?query=${encodeURIComponent(searchQuery.trim())}`)
            setSearchQuery('');
        }
    }

    const handleKeyDown = (e)=>{
        if(e.key === 'Enter') handleSearch();
    };
  const restaurants = [
    {
      name: "A&W",
      image: "https://spoonacular.com/menuItemImages/cookies.jpg",
      cuisine: "Indian, Chinese",
      rating: 4.5,
    },
    {
      name: "Loop Pizza Grill",
      image: "https://spoonacular.com/menuItemImages/vegetarian-pizza.jpg",
      cuisine: "American",
      rating: 4.2,
      
    },
    {
      name: "Old Chicago",
      image: "https://spoonacular.com/menuItemImages/cheese-pizza.png",
      cuisine: "Mexican",
      rating: 4.9,
      
    },
    {
      name: "Perkins",
      image: "https://spoonacular.com/menuItemImages/apple-pie-slice.jpg",
      cuisine: "Italian",
      rating: 4.1,
      
    },
    {
      name: "Arby's",
      image: "https://img.spoonacular.com/menu-items/419278.jpg",
      cuisine: "Mexican",
      rating: 4.2,
      
    },
    {
      name: "Evolution Fresh",
      image: "https://spoonacular.com/menuItemImages/pilaf.png",
      cuisine: "Mexican",
      rating: 4.8,
      
    },
    {
      name: "Old Chicago",
      image: "https://spoonacular.com/menuItemImages/cheese-pizza.png",
      cuisine: "Mexican",
      rating: 4.5,
      
    },
    {
      name: "Blueberry Regular Bagel",
      image: "https://spoonacular.com/menuItemImages/plain-bagel.jpg",
      cuisine: "Bagels",
      rating: 4.5,
      
    },
    {
      name: "Firehouse Subs",
      image: "https://spoonacular.com/menuItemImages/plastic-to-go-drink-cup.jpg",
      cuisine: "Mexican",
      rating: 4.6,
      
    },
    {
      name: "Applewood Smoked Bacon",
      image: "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.jpg",
      cuisine: "German",
      rating: 3.9,
      
    },
    
    {
      name: "Old Chicago",
      image: "https://spoonacular.com/menuItemImages/cheese-pizza.png",
      cuisine: "Mexican",
      rating: 4.1,
      
    },
    {
      name: "Red Robin",
      image: "https://spoonacular.com/menuItemImages/vanilla-milkshake.png",
      cuisine: "Shakes",
      rating: 4.9,
      
    },
    {
      name: "Carnitas Nachos",
      image: "https://spoonacular.com/menuItemImages/nachos.jpg",
      cuisine: "Tacos",
      rating: 4.8,
      
    },
    {
      name: "Roly Poly",
      image: "https://spoonacular.com/menuItemImages/sandwich.jpg",
      cuisine: "Indian",
      rating: 4.1,
      
    },
    {
      name: "Flat Top Grill",
      image: "https://spoonacular.com/menuItemImages/potato-curry.jpg",
      cuisine: "Tandoor",
      rating: 4.1,
      
    },
    {
      name: "Firehouse Subs",
      image: "https://spoonacular.com/menuItemImages/plastic-to-go-drink-cup.jpg",
      cuisine: "Mexican",
      rating: 4.6,
      
    }
    
  ];

  return (
    
    <div className="restaurant-list-container">
        <div className='restaurant-search-box'>
            <input 
                type="text"
                placeholder='Search Restaurant ...'
                className='restaurant-search-input'
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={handleSearch}>🔍</button>
        </div>
        <div className='restraunt-suggestion'>
            {restaurants.map((restaurant, index) => (
                <RestaurantCard
                key={index}
                name={restaurant.name}
                image={restaurant.image}
                cuisine={restaurant.cuisine}
                rating={restaurant.rating}
                />
            ))}

        </div>
      
    </div>
    
    
  );
}

export default BrowseRestaurants;
