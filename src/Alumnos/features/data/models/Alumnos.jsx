// src/features/data/models/ModelsAlumno.js
export default function ModelsAlumno(nombre, telefono) {
  if (!nombre || typeof nombre !== "string") {
    throw new Error("Nombre es requerido y debe ser string");
  }
  if (!telefono || typeof telefono !== "string") {
    throw new Error("Teléfono es requerido y debe ser string");
  }
  this.nombre = nombre;
  this.telefono = telefono;
  this.isValid = () => this.nombre.trim() !== "" && this.telefono.trim() !== "";
}
