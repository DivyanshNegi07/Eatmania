import React, { useEffect } from 'react'
const API_KEY = '488036230f174938995294713c708e2c';
import { useState } from 'react';
import {useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
//03d611bc282b4b8c87ddee4f84013772
//061c380fdba840a7be76cc350ff634dc
function SearchRestaurant() {

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const dispatch = useDispatch();
    const [addedItemName, setAddedItemName] = useState('');

    useEffect(()=>{
        if(query){
            const fetchResults = async ()=>{
                setLoading(true);
                try{
                    const response = await fetch(
                        `https://api.spoonacular.com/food/menuItems/search?query=${query}&number=30&apiKey=${API_KEY}`  
                    );
                    const data = await response.json();
                    setResults(data.menuItems);
                }catch(error){
                    console.log('Error fethcing data :', error);

                }finally{
                    setLoading(false);
                }
            }
            fetchResults();
        }
    },[query])

    useEffect(()=>{
        if(addedItemName){
            const timer = setTimeout(()=>{
                setAddedItemName('')
            },2000)
            return ()=> clearTimeout(timer)
        }
    },[addedItemName])

    


  return (
    <div className="search-results-container">
        <h2>Order From : "{query}"</h2>
         {addedItemName && (<div className="item-added-notification">✅ <strong>{addedItemName}</strong> added to cart!</div>)}
        {loading ? (
                        <p style={{marginTop: '50px'}}>Loading...</p>
                    ) : results?.length > 0 ? (
                        <div className="search-cards">
                            {results.map((item) => (
                                <div key={item.id} className="search-card">
                                    <img src={item.image} alt={item.title} />
                                    <div className='search-details'>
                                        <div>
                        
                                                <h4>{item.title}</h4>
                                                <h6>By : {item.restaurantChain}</h6>
                                                 {item.servings?.size && item.servings?.unit && (<h6>Qty : {item.servings.size} {item.servings.unit}</h6>)}
                                            
                                            
                                            <span>₹ {Math.ceil(Number(item.id)/1000)}</span>
                                        </div>
                                       
                                        <button onClick={()=>{
                                            dispatch(addToCart(item));
                                            setAddedItemName(item.title);
                                        }} className="add-to-cart-btn">Add</button> 
                                        
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{marginTop:"100px"}}>No results found for "{query}"</p>
                    )}
      
    </div>
  )
}

export default SearchRestaurant
