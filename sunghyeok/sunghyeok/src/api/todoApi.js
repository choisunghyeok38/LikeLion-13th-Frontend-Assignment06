import axios from 'axios';

const API_URL_1 = import.meta.env.VITE_API_URL_1;
const API_URL_2 = import.meta.env.VITE_API_URL_2;

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${API_URL_1}/todos`);
    return response.data;
  } catch (error) {
    console.error('투두 불러오기 실패:', error);
    return [];
  }
};

export const addTodo = async (todo) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL_2, todo);
    return response.data;
  } catch (error) {
    console.error('투두 추가 실패:', error);
    throw error;
  }
};
