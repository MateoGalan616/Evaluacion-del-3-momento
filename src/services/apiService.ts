
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getFilms = async () => {
  try {
    const response = await axios.get(`${API_URL}/films`);
    return response.data;
  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};

export const createFilm = async (film: any) => {
  try {
    const response = await axios.post(`${API_URL}/films`, film);
    return response.data;
  } catch (error) {
    console.error('Error creating film:', error);
    throw error;
  }
};


export const getScenes = async () => {
  try {
    const response = await axios.get(`${API_URL}/scenes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching scenes:', error);
    throw error;
  }
};

export const getCharacters = async () => {
  try {
    const response = await axios.get(`${API_URL}/characters`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
