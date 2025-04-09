import apiService from "../datasource/ApiService";

const AlumnoRepository = {
  getAlumnos:   () => apiService.get("/alumnos"),
  createAlumno: (alumno) => apiService.post("/crearalumnos", alumno), // 👈 diferente
  updateAlumno: (id, alumno) => apiService.put(`/alumnos/${id}`, alumno),
  deleteAlumno: (id) => apiService.delete(`/alumnos/${id}`),
};

export default AlumnoRepository;
