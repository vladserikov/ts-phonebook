import React, { useState, useEffect } from "react";
import { PersonType } from "./types";
import PersonForm from "./components/PersonForm";
import services from "./services/person";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App: React.FC = () => {
  const [state, setState] = useState<PersonType[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    services.getAll().then(returnData => {
      setNotification("data request");
      setState(returnData);
      setTimeout(() => {
        setNotification(null);
      }, 2000);
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
      <Notification message={notification} />
      <PersonForm addPerson={addPerson} />
      <Persons persons={state} />
    </div>
  );
};

export default App;
