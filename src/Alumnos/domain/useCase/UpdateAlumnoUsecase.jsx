import AlumnoRepository from "../../features/data/repository/AlumnoRepository";

const updateAlumno = async (id, alumno) => await AlumnoRepository.updateAlumno(id, alumno);
export default updateAlumno;
