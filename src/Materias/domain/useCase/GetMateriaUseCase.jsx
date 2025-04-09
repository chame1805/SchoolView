import MateriaRepository from "../../features/data/repository/MteriaRepository";

  
const getMaterias = async () => {
  return await MateriaRepository.getMaterias();
};

export default getMaterias;
