import axios from 'axios';

const API_URL = import.meta.env.PROD ? '/api/' : (import.meta.env.VITE_API_URL || 'http://localhost:8000/api/');

const api = axios.create({
  baseURL: API_URL,
});

export const getProjects = () => api.get('projects/');
export const getResumes = () => api.get('resumes/');
export const submitContact = (data) => api.post('contact/', data);

export default api;
