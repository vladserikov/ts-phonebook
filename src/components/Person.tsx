import React from "react";
import { PersonBase } from "../types";

const Person: React.FC<PersonBase> = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  );
};

export default Person;
