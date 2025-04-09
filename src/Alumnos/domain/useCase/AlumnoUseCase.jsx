import AlumnoRepository from "../../features/data/repository/AlumnoRepository";




const getAlumnos = async () => {
  return await AlumnoRepository.getAlumnos();
};

const createAlumno = async (alumno) => {
  return await AlumnoRepository.createAlumno(alumno);
};

const updateAlumno = async (id, alumno) => {
  return await AlumnoRepository.updateAlumno(id, alumno);
};

const deleteAlumno = async (id) => {
  return await AlumnoRepository.deleteAlumno(id);
};

export default { getAlumnos, createAlumno, updateAlumno, deleteAlumno };
