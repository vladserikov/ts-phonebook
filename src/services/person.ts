import { PersonType, PersonBase } from './../types';
import axios, { AxiosResponse } from 'axios';
const baseUrl: string = `/api/persons`;

const parseData = (response: AxiosResponse) => {
  const { data } = response;
  return data;
};

const getAll = async () => {
  const response = await axios.get<AxiosResponse>(baseUrl);
  const allData: PersonType[] = parseData(response);
  return allData;
};

const create = async (obj: PersonBase) => {
  const response = await axios.post<AxiosResponse>(baseUrl, obj);
  const returnObj: PersonType = parseData(response);
  return returnObj;
};

// const removed = (id) => axios.delete(`${baseUrl}/${id}`).then(res => res.data);

const update = async (id: string, obj: PersonBase) => {
  const response = await axios.put<AxiosResponse>(`${baseUrl}/${id}`, obj);
  const returnObj: PersonType = parseData(response);
  return returnObj;
};

export default {
  getAll,
  create,
  // removed,
  update,
};