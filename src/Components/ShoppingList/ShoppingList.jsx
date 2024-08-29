import React, { useState } from "react";
import ShoppingForm from "../ShoppingForm/ShoppingForm";
import "../ShoppingList/ShoppingList.css";

function ShoppingItem({ id, item, quantity, deleteItem, updateItem }) {
  const [isEdit, setEdit] = useState(false);

  function handleDelete(event) {
    event.preventDefault();
    deleteItem(id);
  }

  function handleEdit(event) {
    event.preventDefault();
    setEdit((prevEdit) => !prevEdit);
  }

  function handleUpdate(item, quantity) {
    updateItem(id, item, quantity);
    setEdit(false);
  }

  const ReadOnlyJsx = (
    <span>
      {item} ({quantity})
    </span>
  );

  const EditJsx = (
    <ShoppingForm
      submitItem={handleUpdate}
      submitButtonText="Update"
      defaultItemName={item}
      defaultQuantity={quantity}
    />
  );

  return (
    // edit
    <li>
      {isEdit ? EditJsx : ReadOnlyJsx}
      <div className="action">
        <button className="deletebtn" onClick={handleDelete}>
          Delete
        </button>
        <button className="Editbtn" onClick={handleEdit}>
          {isEdit ? "Cancel" : "Edit"}
        </button>
      </div>
    </li>
  );
}

export default function ShoppingList({ items, deleteItem, updateItem }) {
  const ItemsJsx = items.map((listItem) => (
    <ShoppingItem
      key={listItem.id}
      id={listItem.id}
      item={listItem.item}
      quantity={listItem.quantity}
      deleteItem={deleteItem}
      updateItem={updateItem}
    />
  ));

  return (
    <div className="card">
      <ul>{ItemsJsx}</ul>
    </div>
  );
}
