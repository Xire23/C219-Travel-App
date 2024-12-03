import React, { useState } from "react";
import Logo from "./Logo.js"
import Form from "./Form.js"
import PackingList from "./PackingList.js"
import Stats from "./Stats.js"

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [sortOrder, setSortOrder] = useState("input");

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAll() {
    setItems([]);
  }

  function sortItems(items, order) {
    switch (order) {
      case "description":
        return [...items].sort((a, b) =>
          a.description.localeCompare(b.description)
        );
      case "packed":
        return [...items].sort((a, b) => a.packed - b.packed);
      default:
        return items;
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <span className="row">
      <select className="sort-dropdown"
        onChange={(e) => setSortOrder(e.target.value)}
        value={sortOrder}
      >
        <option value="input">Sort by Input Order</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by Packed Status</option>
      </select>
      <button onClick={handleClearAll} className="clear-button">Clear All</button>
      <PackingList
        items={sortItems(items, sortOrder)}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
      </span>
    </div>
  );
}


export default App;
