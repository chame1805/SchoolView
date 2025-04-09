import { useState, useEffect } from "react";
import AlumnoUseCase from "../../../domain/useCase/AlumnoUseCase";
import Alumno from "../../data/models/Alumnos";

 function useAlumnoViewModel() {
  const [alumnos, setAlumnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = async () => {
    try {
      const data = await AlumnoUseCase.getAlumnos();
      setAlumnos(data);
    } catch (error) {
      console.error("Error al obtener alumnos:", error);
    }
  };

  const addOrUpdateAlumno = async () => {
    try {
      const alumno = new Alumno(nombre, telefono);
      if (!alumno.isValid()) {
        alert("Por favor, completa todos los campos.");
        return;
      }
      if (editId) {
        await AlumnoUseCase.updateAlumno(editId, alumno);
        setEditId(null);
      } else {
        await AlumnoUseCase.createAlumno(alumno);
      }
      resetForm();
      fetchAlumnos();
    } catch (error) {
      console.error("Error al guardar alumno:", error);
    }
  };

  const editAlumno = (alumno) => {
    setNombre(alumno.nombre);
    setTelefono(alumno.telefono);
    setEditId(alumno.id);
  };

  const deleteAlumno = async (id) => {
    try {
      await AlumnoUseCase.deleteAlumno(id);
      fetchAlumnos();
    } catch (error) {
      console.error("Error al eliminar alumno:", error);
    }
  };

  const resetForm = () => {
    setNombre("");
    setTelefono("");
  };

  return {
    alumnos,
    nombre,
    telefono,
    editId,
    setNombre,
    setTelefono,
    addOrUpdateAlumno,
    editAlumno,
    deleteAlumno,
  };
}
export default useAlumnoViewModel;
