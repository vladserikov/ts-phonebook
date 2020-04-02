import React from "react";
import { PersonType } from "../types";
import Person from "./Person";

type Persons = {
  persons: PersonType[];
  deletePerson: (id: string) => void;
};

const Persons: React.FC<Persons> = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map(p => (
        <Person
          key={p.id}
          name={p.name}
          number={p.number}
          onDelete={() => deletePerson(p.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
