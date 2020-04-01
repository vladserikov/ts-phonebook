import { Person } from './../types';
import axios, { AxiosResponse } from 'axios';
const baseUrl: string = `/api/persons`;

const parseData = (response: AxiosResponse): Person[] => {
  const { data } = response;
  return data;
};

const getAll = async () => {
  const response = await axios.get<AxiosResponse>(baseUrl);
  const allData = parseData(response);
  return allData;;
};

// const create = (obj) => axios.post(baseUrl, obj).then(res => res.data);

// const removed = (id) => axios.delete(`${baseUrl}/${id}`).then(res => res.data);

// const update = (id, obj) => axios.put(`${baseUrl}/${id}`, obj).then(res => res.data);

export default {
  getAll,
  // create,
  // removed,
  // update,
};