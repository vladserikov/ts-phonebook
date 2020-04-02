import React, { useState } from "react";
import { PersonBase } from "../types";

type Props = {
  addPerson: (obj: PersonBase) => void;
};

const PersonForm: React.FC<Props> = ({ addPerson }) => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const sendData = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length === 0 || number.length === 0) {
      return;
    }
    addPerson({ name, number });
    setName("");
    setNumber("");
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
