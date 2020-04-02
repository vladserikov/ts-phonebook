import React from "react";
import { PersonBase } from "../types";

interface Personal extends PersonBase {
  onDelete: () => void;
}

const Person: React.FC<Personal> = ({ name, number, onDelete }) => {
  return (
    <div>
      {name} {number} <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default Person;
