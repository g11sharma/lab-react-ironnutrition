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
  const [search, setSearch] = useState('');

  function addFood(newfood) {
    const copy = [...foods];
    copy.push(newfood);
    setFoods(newfood);
  }
  function deleteFood(name) {
    setFoods(foods.filter((food) => food.name !== name));
    console.log(deleteFood);
  }

  const addNewFood = (newFood) => {
    //add it to the list of Food
    setFoods([...foods, newFood]);
  };

  const searchFood = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });
  //function searchFood() {
  //const foodSearch = foodData.filter((food) => food.name.match(query));
  //setFoods(foodSearch);
  //}

  return (
    <div>
      <AddFoodForm addNewFood={addNewFood} />
      <SearchForm search={search} setSearch={setSearch} />
      <h2>Food List</h2>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {searchFood.map((foods) => (
          <FoodBox {...foods} deleteFood={deleteFood} />
        ))}
      </Row>
    </div>
  );
}

export default App;
