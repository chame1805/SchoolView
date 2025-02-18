import alumnoRepository from "../../data/repository/AlumnoRepository";

const getAlumnos = async () => {
  return await alumnoRepository.getAlumnos();
};

const createAlumno = async (alumno) => {
  return await alumnoRepository.createAlumno(alumno);
};

const updateAlumno = async (id, alumno) => {
  return await alumnoRepository.updateAlumno(id, alumno);
};

const deleteAlumno = async (id) => {
  return await alumnoRepository.deleteAlumno(id);
};

export default { getAlumnos, createAlumno, updateAlumno, deleteAlumno };
