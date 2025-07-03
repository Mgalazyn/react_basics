import React, { useState } from "react";

interface AddButtonProps {
  onAdd: (item: string) => void;
}

const AddButton = ({ onAdd }: AddButtonProps) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new item"
      />
      <button type="button" className="btn btn-primary" onClick={handleAdd}>
        Add new item
      </button>
    </div>
  );
};

export default AddButton;
