import React from "react";
import { PersonType } from "../types";
import Person from "./Person";

type Persons = {
  persons: PersonType[];
};

const Persons: React.FC<Persons> = ({ persons }) => {
  return (
    <div>
      {persons.map(p => (
        <Person key={p.name} name={p.name} number={p.number} />
      ))}
    </div>
  );
};

export default Persons;
