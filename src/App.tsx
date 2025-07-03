import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import AddButton from "./components/AddButton";
import { useState } from "react";

function App() {
  const [items, setItems] = useState<string[]>([
    "bulbasaur",
    "pikachu",
    "mewtoew",
  ]);

  const handleAdd = (item: string) => {
    setItems([...items, item]);
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
    </div>
  );
}

export default App;
