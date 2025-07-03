import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading?: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // State hook to manage the selected index
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Function to check if no pokemon is found
  const noFoundPokemon = () => {
    return items.length === 0 && <p>No pokemon found</p>;
  };

  return (
    <>
      <h1>List of {heading}</h1>
      {noFoundPokemon()}
      <ul className="list-group">
        {items.map((pokemon, index) => (
          <li
            key={pokemon}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(pokemon);
            }}
          >
            {pokemon}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
