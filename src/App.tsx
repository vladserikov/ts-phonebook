import React, { useState } from "react";
import { Person } from "./types";
import personData from "./data";
import PersonForm from "./components/PersonForm";

const App: React.FC = () => {
  const [state, setState] = useState<Person[] | null>(null);

  React.useEffect(() => {
    setTimeout(() => {
      setState(personData);
    }, 200);
  }, []);

  console.log(state);
  return (
    <div>
      text
      <h1>start</h1>
      <PersonForm />
    </div>
  );
};

export default App;
