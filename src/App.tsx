import React, { useState, useEffect } from "react";
import { PersonType, PersonBase } from "./types";
import PersonForm from "./components/PersonForm";
import services from "./services/person";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App: React.FC = () => {
  const [state, setState] = useState<PersonType[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const notificationMessage = (message: string | null) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  useEffect(() => {
    services.getAll().then(returnData => {
      notificationMessage("data request");
      setState(returnData);
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
          notificationMessage("don`t edit phone");
        }
      }

      return;
    }

    try {
      const person: PersonType = await services.create(newPerson);
      setState(state.concat(person));
    } catch (e) {
      console.log(e);
      notificationMessage("not add phone");
    }
    return;
  };

  const deletePerson = async (id: string) => {
    const person: PersonType | undefined = state.find(p => p.id === id);
    if (person) {
      const question = window.confirm(`Delete ${person.name}`);
      if (question) {
        try {
          services.removed(person.id);
          setState(state.filter(p => (p.id !== person.id ? p : null)));
        } catch (e) {
          notificationMessage("fault");
        }
      }
    }

    return;
  };

  return (
    <div>
      <h2>phonebook</h2>
      <Notification message={notification} />
      <PersonForm
        addPerson={addPerson}
        notificationMessage={notificationMessage}
      />
      <h2>numbers</h2>
      <Persons persons={state} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
