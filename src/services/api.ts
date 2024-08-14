import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const createDirectory = (path: string) => api.post('/create', { path });
export const moveDirectory = (src: string, dest: string) => api.post('/move', { src, dest });
export const deleteDirectory = (path: string) => api.post('/delete', { path });
export const listDirectories = () => api.get('/list');