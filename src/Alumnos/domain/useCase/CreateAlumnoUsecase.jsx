import AlumnoRepository from "../../features/data/repository/AlumnoRepository";

const createAlumno = async (alumno) => await AlumnoRepository.createAlumno(alumno);
export default createAlumno;
