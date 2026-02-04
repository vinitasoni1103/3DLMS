import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; 

export const fetchModels = async () => {
  const res = await axios.get(`${BASE_URL}/api/models`);
  console.log("Fetched models:", res.data);
  return res.data;
}; 

export const addModel = async (modelData) => {
  const res = await axios.post(`${BASE_URL}/api/models`, modelData);
  return res.data;
};

export const updateModel = async (id, modelData) => {
  const res = await axios.put(`${BASE_URL}/api/models/${id}`, modelData);
  return res.data;
};

export const deleteModel = async (id) => {
  const res = await axios.delete(`${BASE_URL}/api/models/${id}`);
  return res.data;
};

export const fetchUsers = async () => {
  const res = await axios.get('/api/users');  
  return res.data;
};
