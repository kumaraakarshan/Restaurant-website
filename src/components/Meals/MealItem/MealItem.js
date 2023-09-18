import React, { useState } from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const [quantity, setQuantity] = useState(1);

  const price = `Rs. ${props.price.toFixed(2)}`;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
  
    console.log(`Added ${quantity} ${props.name}(s) to cart`);
  };

  return (
    <li className={classes.Meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <form>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
          <button type="button" onClick={handleAddToCart}>
            ADD
          </button>
        </form>
      </div>
    </li>
  );
};

export default MealItem;
