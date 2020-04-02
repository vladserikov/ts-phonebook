export interface PersonBase {
  name: string;
  number: string;
}

export interface PersonType extends PersonBase {
  id: string;
}

