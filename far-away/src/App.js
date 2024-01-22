import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>🏝️ Far Away 🧳</h1>
    </header>
  );
}

function Form() {
  const [itemQuantity, setItemQuantity] = useState(1)
  const [item, setItem] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    if(!item) return;
    const newItem = {
      item, itemQuantity, packed: false, id: Date.now()
    }
    console.log(newItem);
    setItemQuantity(1)
    setItem("")
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you trip?</h3>
      <select value={itemQuantity} onChange={(e) => setItemQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={item} onChange={(e) => setItem(e.target.value)}/>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
