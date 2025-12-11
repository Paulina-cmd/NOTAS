import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getTasks = () => axios.get(`${API}/tasks`);
export const createTask = (task) => axios.post(`${API}/tasks`, task);
export const updateTask = (id, task) => axios.put(`${API}/tasks/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API}/tasks/${id}`);
