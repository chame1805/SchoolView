import { useState, useEffect } from "react";
import createMateria from "../../../domain/useCase/CreateMateriaUsecase";
import deleteMateria from "../../../domain/useCase/DeleteMateriaUsecase";
import updateMateria from "../../../domain/useCase/UpdateMateriaUsecase";
import ModelsMateria from "../../data/models/ModelsMateria";
import getMaterias from "../../../domain/useCase/GetMateriaUseCase";

export default function useMateriaViewModel() {
  const [materias, setMaterias] = useState([]);
  const [name, setName] = useState(""); 
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadMaterias();
  }, []);

  const loadMaterias = async () => {
    try {
      const data = await getMaterias();
      setMaterias(data);
    } catch (error) {
      console.error("Error al obtener materias:", error);
    }
  };

  const addOrUpdateMateria = async () => {
    try {
      const materiaObj = new ModelsMateria(name);
      if (editId) {
        await updateMateria(editId, materiaObj);
        setEditId(null);
      } else {
        await createMateria(materiaObj);
      }
      setName("");
      await loadMaterias();
    } catch (error) {
      console.error("Error al guardar materia:", error);
    }
  };

  const editMateria = (m) => {
    setName(m.name);
    setEditId(m.id);
  };

  const deleteMateriaById = async (id) => {
    try {
      await deleteMateria(id);
      await loadMaterias();
    } catch (error) {
      console.error("Error al eliminar materia:", error);
    }
  };

  return {
    materias,
    name,
    editId,
    setName,
    addOrUpdateMateria,
    editMateria,
    deleteMateria: deleteMateriaById,
  };
}