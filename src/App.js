import React from 'react';
import { useState } from 'react';
import { Row, Divider, Button, Card } from 'antd';
import 'antd/dist/antd.css';

import foodlist from './foods.json';
import FoodBox from './componnents/FoodBox';
import AddFoodForm from './componnents/AddFoodForm';
import SearchForm from './componnents/SearchForm';

import './App.css';

function App() {
  const foodData = [...foodlist];

  const [foods, setFoods] = useState(foodData);

  function addFood(newfood) {
    const copy = [...foods];
    copy.push(newfood);
    setFoods(newfood);
  }
  function deleteFood(food) {
    setFoods(foods.filter((x) => x !== food));
    console.log(deleteFood);
  }

  const addNewFood = (newFood) => {
    //add it to the list of Food
    setFoods([...foods, newFood]);
  };

  function searchFood() {
    const foodSearch = foodData.filter((food) => food.name.match(query));
    setFoods(foodSearch);
  }

  return (
    <div>
      <AddFoodForm addNewFood={addNewFood} />
      <SearchForm searchFood={searchFood} />
      <h2>Food List</h2>
      <Row style={{ width: '100%', justifyContent: 'center' }}></Row>
      <div>
        {foods.map((foods) => (
          <FoodBox {...foods} deleteFood={deleteFood} />
        ))}
      </div>
    </div>
  );
}

export default App;
