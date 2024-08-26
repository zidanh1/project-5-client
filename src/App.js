import "./App.css";
import React, { useState, useEffect } from "react";

import ShoppingForm from "./Components/ShoppingForm/ShoppingForm";
import ShoppingList from "./Components/ShoppingList/ShoppingList";

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    fetch("https://qr3zd2-8080.csb.app/api/list")
      .then((x) => x.json())
      .then((response) => {
        setShoppingList(response);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <main>
        <ShoppingForm />
        <ShoppingList />
      </main>
    </div>
  );
}
