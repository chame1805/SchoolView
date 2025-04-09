import MateriaRepository from "../../features/data/repository/MteriaRepository";

const createMateria = async (materia) => {
  return await MateriaRepository.createMateria(materia);
};

export default createMateria;
