import MateriaRepository from "../../features/data/repository/MteriaRepository";

const deleteMateria = async (id) => {
  return await MateriaRepository.deleteMateria(id);
};

export default deleteMateria;
