import { useState } from "react";
import ReactDOM from "react-dom/client";

// const fruit = [
//   "apple",
//   "orange",
//   "pear",
//   "grapefruit",
//   "lemon",
//   "apricot",
//   "banana",
//   "strawberry",
// ];

// function randomFruit() {
//   return fruit[Math.floor(Math.random() * fruit.length)];
// }

function TodoList({ items }) {
  return <ul></ul>;
}

function App() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <TodoList items={items} />
      <button onClick={() => {}}>Click me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
