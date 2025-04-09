import MteriaRepository from "../../features/data/repository/MteriaRepository";

const getMaterias = async () => {
  return await MteriaRepository.getMaterias();
};

const createMateria = async (materia) => {
  return await MteriaRepository.createMateria(materia);
};

const updateMateria = async (id, materia) => {
  return await MteriaRepository.updateMateria(id, materia);
};

const deleteMateria = async (id) => {
  return await MteriaRepository.deleteMateria(id);
};

export default { getMaterias, createMateria, updateMateria, deleteMateria };
