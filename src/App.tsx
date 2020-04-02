import React, { useState, useEffect } from "react";
import { PersonType, PersonBase } from "./types";
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

  const addPerson = async ({ name, number }: PersonBase) => {
    const newPerson = {
      name,
      number
    };

    const checkPerson: PersonType | undefined = state.find(
      p => p.name === newPerson.name
    );

    if (checkPerson) {
      const question = window.confirm(
        `${checkPerson.name} is alredy to phonebook, replace the od number whith a new one?`
      );
      const id: string = checkPerson.id;

      if (question) {
        try {
          const updatePerson: PersonType = await services.update(id, newPerson);
          setState(
            state.map(person => (person.id === id ? updatePerson : person))
          );
        } catch (e) {
          console.log(e);
          setNotification("don`t edit phone");
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        }
      }

      return;
    }

    try {
      const person: PersonType = await services.create(newPerson);
      setState(state.concat(person));
    } catch (e) {
      console.log(e);
      setNotification("not add phone");
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
    return;
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
