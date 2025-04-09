import AlumnoRepository from "../../features/data/repository/AlumnoRepository";

const deleteAlumno = async (id) => await AlumnoRepository.deleteAlumno(id);
export default deleteAlumno;
