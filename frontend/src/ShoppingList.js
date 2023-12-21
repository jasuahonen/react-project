// ShoppingList.js

import React from 'react';
import './ShoppingList.css';

function ShoppingList({ myitems, onDelete }) {
  return (
    <div className="shopping-item-container">
      {myitems.map((my_item) => (
        <div key={my_item.id}>
          <p className="item-info">id: {my_item.id} item: {my_item.item}</p>
          <button onClick={() => onDelete(my_item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
