import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import AddButton from "./components/AddButton";
import { useState } from "react";
import Test from "./components/Test";
import Game from "./components/Game";
function App() {
  const [items, setItems] = useState<string[]>([
    "bulbasaur",
    "pikachu",
    "mewtoew",
  ]);

  const handleAdd = (item: string) => {
    // Add new item to the list
    setItems([...items, item]);
  };

  const handleDelete = (item: string) => {
    // Remove item from the list
    setItems(items.filter((i) => i !== item));
  };

  const handleUpdate = (oldItem: string, newItem: string) => {
    // Update item in the list
    setItems(items.map((i) => (i === oldItem ? newItem : i)));
  };

  const handleSelectItem = (item: string) => {};
  // The onSelectItem prop is not used in the ListGroup component, so we can pass an empty function
  // or remove it if not needed.

  return (
    <div>
      <Alert>
        <h1>Welcome to the Pokemon App</h1>
        <p>Click on a Pokemon to see more details.</p>
      </Alert>
      <ListGroup
        items={items}
        heading="Items"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <AddButton onAdd={handleAdd} />
      <Test></Test>
      <Game></Game>
    </div>
  );
}

export default App;
