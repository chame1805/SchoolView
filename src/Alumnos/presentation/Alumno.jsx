
import useAlumnoViewModel from "./ViewModel/useAlumnoViewModel";

export default function Alumno() {
  const {
    alumnos,
    nombre,
    telefono,
    editId,
    setNombre,
    setTelefono,
    addOrUpdateAlumno,
    editAlumno,
    deleteAlumno,
  } = useAlumnoViewModel();

  return (
    <div className="alumno-container">
      <h1>Alumno</h1>
      <form
        className="alumno-form"
        onSubmit={(e) => {
          e.preventDefault();
          addOrUpdateAlumno();
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Actualizar" : "Agregar"}</button>
      </form>
      <ul className="alumno-list">
        {alumnos.map((alumno) => (
          <li key={alumno.id}>
            {alumno.nombre} - {alumno.telefono}
            <button className="edit" onClick={() => editAlumno(alumno)}>Editar</button>
            <button className="delete" onClick={() => deleteAlumno(alumno.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
