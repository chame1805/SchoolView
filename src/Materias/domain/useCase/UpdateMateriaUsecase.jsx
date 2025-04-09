import MateriaRepository from "../../features/data/repository/MteriaRepository";

const updateMateria = async (id, materia) => {
  return await MateriaRepository.updateMateria(id, materia);
};

export default updateMateria;
