import React, { useState, useEffect } from 'react';
import './App.css';
import QuantityBox from './QuantityBox';

function App() {

 const [shoppingList, setShoppingList] = useState([]);
 
 const [newItem, setNewItem] = useState('');

//  useEffect(() => {
//     // Fetch the shopping list when the component mounts
//     fetch('https://23wsp-pro6.student.titeweb/api/shoppingList') // Adjust the URL based on your server configuration
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => setShoppingList(data))
//       .catch(error => console.error('Error fetching shopping list:', error));
//  }, []);


useEffect(() => {
  const fetchShoppingList = async () => {
   const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/shoppingList`);
    //const response = await fetch(`https://23wsp-pro6.student.titeweb/api/shoppingList`);
    const data = await response.json();
    console.log(data);
    setShoppingList(data)
  }
  try {
    fetchShoppingList();
  } catch(err) {
    console.log(err);
  }
}, []);

 const handleAddItem = () => {
    // Add a new item to the shopping list
    fetch(`${process.env.REACT_APP_BACKEND}/api/shoppingList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item: newItem }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setShoppingList([...shoppingList, data]);
      setNewItem(''); // Clear the text input
    })
    .catch(error => console.error('Error adding item:', error));
 };

 const handleToggleCheck = (id) => {
    // Toggle the "checked" state for an item
    const updatedList = shoppingList.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setShoppingList(updatedList);
 };

 const handleDeleteItem = (id) => {
    // Delete an item from the shopping list
    
    fetch(`${process.env.REACT_APP_BACKEND}/api/shoppingList/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Assuming your server returns some data on successful delete
    })
    .then(() => {
      const updatedList = shoppingList.filter(item => item.id !== id);
      setShoppingList(updatedList);
    })
    .catch(error => console.error('Error deleting item:', error));
 };

 return (
    <div className="App">
      <header className="App-header">
       
        <h1>Shopping List</h1>

        <ul>
          {shoppingList.map(item => (
            <li key={item.id}>
              {item.checked ? (
                    <del>{item.item}</del>
                  ) : (
                    <span>{item.item}</span>
              )}
                <button onClick={() => handleToggleCheck(item.id)}>
                    {item.checked ? (
                      <span>&#x2713;</span>
                    ) : (
                      <span>&#9898;</span>
                      )}
                </button>
                <QuantityBox />
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
          <div>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter new item"
            />
            <button onClick={handleAddItem}>Add Item</button>
          </div>
      </header>
    </div>
 );
}

export default App;