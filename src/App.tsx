import React, { useState } from "react";
import { Person } from "./types";
import personData from "./data";
import PersonForm from "./components/PersonForm";

const App: React.FC = () => {
  const [state, setState] = useState<Person[]>([]);

  React.useEffect(() => {
    setTimeout(() => {
      setState(personData);
    }, 200);
  }, []);

  const addPerson = ({ name, number }: Person) => {
    const newPerson = {
      name,
      number
    };

    setState(state.concat(newPerson));
  };

  console.log(state);
  return (
    <div>
      text
      <h1>start</h1>
      <PersonForm addPerson={addPerson} />
    </div>
  );
};

export default App;
