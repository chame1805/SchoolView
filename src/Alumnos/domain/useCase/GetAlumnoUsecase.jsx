import AlumnoRepository from "../../features/data/repository/AlumnoRepository";

const getAlumnos = async () => await AlumnoRepository.getAlumnos();
export default getAlumnos;
