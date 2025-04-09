import { useState, useEffect } from "react";
import getAlumnos from "../../../domain/useCase/GetAlumnoUsecase";
import createAlumno from "../../../domain/useCase/CreateAlumnoUsecase";
import updateAlumno from "../../../domain/useCase/UpdateAlumnoUsecase";
import deleteAlumnoUseCase from "../../../domain/useCase/DeleteAlumnoUsecase"; // renombrado para evitar conflicto

export default function UseAlumnoViewModel() {
  const [alumnos, setAlumnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [editId, setEditId] = useState(null);

  // ✅ Definición de fetchAlumnos
  const fetchAlumnos = async () => {
    const data = await getAlumnos();
    setAlumnos(data);
  };

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const addOrUpdateAlumno = async () => {
    try {
      if (editId) {
        await updateAlumno(editId, { nombre, telefono });
      } else {
        await createAlumno({ nombre, telefono });
      }

      setNombre("");
      setTelefono("");
      setEditId(null);
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
    await deleteAlumnoUseCase(id);
    fetchAlumnos();
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
