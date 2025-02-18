import { useState, useEffect } from "react";
import alumnoUseCase from "../../domain/useCase/AlumnoUseCase";

export default function useAlumnoViewModel() {
  const [alumnos, setAlumnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = async () => {
    try {
      const data = await alumnoUseCase.getAlumnos();
      setAlumnos(data);
    } catch (error) {
      console.error("Error al obtener alumnos:", error);
    }
  };

  const addOrUpdateAlumno = async () => {
    try {
      const alumno = { nombre, telefono };
      if (editId) {
        await alumnoUseCase.updateAlumno(editId, alumno);
        setEditId(null);
      } else {
        await alumnoUseCase.createAlumno(alumno);
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
      await alumnoUseCase.deleteAlumno(id);
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
