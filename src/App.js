import React from 'react';
import { useState } from 'react';

import foodlist from './foods.json';
import FoodBox from './componnents/FoodBox';
import AddFoodForm from './componnents/AddFoodForm';

import './App.css';

function App() {
  const foodData = [...foodlist];

  const [foods, setFoods] = useState(foodData);

  function addFood(newfood) {
    const copy = [...foods];
    copy.push(newfood);
    setFoods(newfood);
  }

  const addNewFood = (newFood) => {
    //add it to the list of Food
    setFoods([...foods, newFood]);
  };

  return (
    <div>
      <h2>FoodList</h2>
      <div>
        {foods.map((foods) => (
          <FoodBox {...foods} />
        ))}
      </div>
      <AddFoodForm addNewFood={addNewFood} />
    </div>
  );
}

export default App;
