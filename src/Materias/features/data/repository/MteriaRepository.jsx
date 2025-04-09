// src/features/data/repository/MateriaRepository.js
import apiService from "../datasource/ApiService";

const BASE = "/materias";

const MateriaRepository = {
  getMaterias:   () => apiService.get(BASE),
  createMateria: (m) => apiService.post(BASE, m),
  updateMateria: (id, m) => apiService.put(`${BASE}/${id}`, m),
  deleteMateria: (id) => apiService.delete(`${BASE}/${id}`),
};

export default MateriaRepository
