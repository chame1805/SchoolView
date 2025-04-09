import apiService from "../datasource/ApiService";

const getMaterias = async () => {
  return await apiService.get("/materias");
};

const createMateria = async (materia) => {
  return await apiService.post("/crearmaterias", materia);
};

const updateMateria = async (id, materia) => {
  return await apiService.put(`/materias/${id}`, materia);
};

const deleteMateria = async (id) => {
  return await apiService.delete(`/materias/${id}`);
};

export default { getMaterias, createMateria, updateMateria, deleteMateria };
