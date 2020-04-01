import React from "react";
import { PersonType } from "../types";

const Person: React.FC<PersonType> = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  );
};

export default Person;
