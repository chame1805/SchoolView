import useAlumnoViewModel from "../viewModel/useAlumnoViewModel";
import "./Alumno.css";

export default function Alumno() {
  const { alumnos, nombre, telefono,editId,setNombre, setTelefono, addOrUpdateAlumno, editAlumno,deleteAlumno,  } = useAlumnoViewModel();

  return (
    <div className="crud-container">
      <div className="crud-card">
        <h1 className="crud-title">Gestión de Alumnos</h1>
        <form
          className="crud-form"
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
            className="crud-input"
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            className="crud-input"
          />
          <button
            type="submit"
            className="crud-button submit"
          >
            {editId ? "Actualizar" : "Agregar"}
          </button>
        </form>
        <ul className="crud-list">
          {alumnos.map((alumno) => (
            <li key={alumno.id} className="crud-list-item">
              <span>{alumno.nombre} - {alumno.telefono}</span>
              <div className="crud-actions">
                <button 
                  className="crud-button edit"
                  onClick={() => editAlumno(alumno)}
                >
                  Editar
                </button>
                <button 
                  className="crud-button delete"
                  onClick={() => deleteAlumno(alumno.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
