import React, { useState } from 'react';

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return (
    <div className="quantity-buttons">
      <button onClick={handleDecrement}>&larr;</button>
        <span> {quantity}</span>
      <button onClick={handleIncrement}>&rarr;</button>
    </div>
  );
};

export default QuantityBox;
