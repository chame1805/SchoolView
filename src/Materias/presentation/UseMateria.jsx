import { useState, useEffect } from "react";
import MateriaUseCase from "../domain/useCase/MateriaUseCase";

export default function useMateriaViewModel() {
  const [materias, setMaterias] = useState([]);
  const [name, setName] = useState(""); // Solo un campo name
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMaterias();
  }, []);

  const fetchMaterias = async () => {
    try {
      const data = await MateriaUseCase.getMaterias(); // Usar getMaterias
      setMaterias(data);
    } catch (error) {
      console.error("Error al obtener materias:", error);
    }
  };

  const addOrUpdateMateria = async () => {
    try {
      const materia = { name }; // Solo enviar el nombre
      if (editId) {
        await MateriaUseCase.updateMateria(editId, materia);
        setEditId(null);
      } else {
        await MateriaUseCase.createMateria(materia);
      }
      resetForm();
      fetchMaterias();
    } catch (error) {
      console.error("Error al guardar materia:", error);
    }
  };

  const editMateria = (materia) => {
    setName(materia.name); // Solo editar el nombre
    setEditId(materia.id);
  };

  const deleteMateria = async (id) => {
    try {
      await MateriaUseCase.deleteMateria(id); // Usar deleteMateria
      fetchMaterias();
    } catch (error) {
      console.error("Error al eliminar materia:", error);
    }
  };

  const resetForm = () => {
    setName(""); // Resetear solo el campo name
  };

  return {
    materias,
    name,
    editId,
    setName,
    addOrUpdateMateria,
    editMateria,
    deleteMateria,
  };
}
