import React, { useState } from 'react';
import { Input } from 'antd';

const AddFoodForm = ({ addNewFood }) => {
  const [name, setName] = useState('');
  const [calories, setCalorie] = useState(0);
  const [image, setImage] = useState('');
  const [servings, setserving] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // submission of form all happens here
    const newFood = { name, calories, image, servings };
    addNewFood(newFood);
  };

  return (
    <>
      <h2>Add new food</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. pizza"
            value={name}
            onChange={(event) => {
              console.log('CHANGED', name, 'to', event.target.value);
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="name">calories</label>
          <input
            type="text"
            name="calories"
            id="calories"
            placeholder="e.g. please enter the calories"
            value={calories || ''}
            onChange={(event) => {
              console.log('CHANGED', calories, 'to', event.target.value);
              setCalorie(parseInt(event.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="servings">calories</label>
          <input
            type="text"
            name="servings"
            id="servings"
            placeholder="e.g. please enter the servings"
            value={servings || ''}
            onChange={(event) => {
              console.log('CHANGED', servings, 'to', event.target.value);
              setserving(parseInt(event.target.value));
            }}
          />
        </div>
        <Input type="submit" value="Add Food" />
      </form>
    </>
  );
};
export default AddFoodForm;
