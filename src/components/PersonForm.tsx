import React, { useState } from "react";

const PersonForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const sendData = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(name, number);
  };
  return (
    <form onSubmit={sendData}>
      <div>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={number}
          onChange={({ target }) => setNumber(target.value)}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;
