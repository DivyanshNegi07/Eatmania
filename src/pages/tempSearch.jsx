import React, { useState, useEffect } from 'react';

const FoodSearchPage = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('https://foodgobackend-r61z.onrender.com/api/foods');
        const data = await response.json();
        setFoods(data);
        setFilteredFoods(data);
      } catch (error) {
        console.error('Failed to fetch food data:', error);
      }
    };

    fetchFoods();
  }, []);

  useEffect(() => {
    const results = foods.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(results);
  }, [searchTerm, foods]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Food Search</h1>
      <input
        type="text"
        placeholder="Search food by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '300px', fontSize: '16px' }}
      />

      <ul style={{ marginTop: '20px' }}>
        {filteredFoods.map(food => (
          <li key={food._id} style={{ marginBottom: '10px' }}>
            <strong>{food.name}</strong><br />
            {food.description && <small>{food.description}</small>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodSearchPage;
