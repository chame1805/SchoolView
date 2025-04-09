import apiService from "../datasource/ApiService";

const getAlumnos = async () => {
  return await apiService.get("/alumnos");
};

const createAlumno = async (alumno) => {
  return await apiService.post("/crearalumnos", alumno);
};

const updateAlumno = async (id, alumno) => {
  return await apiService.put(`/alumnos/${id}`, alumno);
};

const deleteAlumno = async (id) => {
  return await apiService.delete(`/alumnos/${id}`);
};

export default { getAlumnos, createAlumno, updateAlumno, deleteAlumno };
