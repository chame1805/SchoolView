// src/features/data/repository/MateriaRepository.js

import apiService from "../datasource/ApiService";

// Cambié la ruta para coincidir con la del backend.
const BASE = "/crearmaterias"; 

const MateriaRepository = {
  getMaterias:   () => apiService.get("/materias"),  // No cambies esta ruta, ya está bien
  createMateria: (m) => apiService.post(BASE, m),  // Aquí usamos /crearmaterias
  updateMateria: (id, m) => apiService.put(`/materias/${id}`, m),  // Rutas correctas
  deleteMateria: (id) => apiService.delete(`/materias/${id}`),  // Rutas correctas
};

export default MateriaRepository;
