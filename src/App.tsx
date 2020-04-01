import React, { useState, useEffect } from "react";
import { PersonType } from "./types";
import PersonForm from "./components/PersonForm";
import services from "./services/person";
import Persons from "./components/Persons";

const App: React.FC = () => {
  const [state, setState] = useState<PersonType[]>([]);

  useEffect(() => {
    services.getAll().then(returnData => {
      setState(returnData);
    });
  }, []);

  const addPerson = ({ name, number }: PersonType) => {
    const newPerson = {
      name,
      number
    };

    setState(state.concat(newPerson));
  };

  // console.log(state);
  return (
    <div>
      <h2>phonebook</h2>
      <PersonForm addPerson={addPerson} />
      <Persons persons={state} />
    </div>
  );
};

export default App;
