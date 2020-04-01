import React, { useState } from "react";
import { Person } from "./types";
// import personData from "./data";
import PersonForm from "./components/PersonForm";
import services from "./services/person";

const App: React.FC = () => {
  const [state, setState] = useState<Person[]>([]);

  React.useEffect(() => {
    services.getAll().then(returnData => {
      setState(returnData);
    });
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
