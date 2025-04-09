import useMateriaViewModel from "../ViewModel/UseMateria";
import "./Materia.css";
export default function Materia() {
  const {
    materias,
    name,
    editId,
    setName,
    addOrUpdateMateria,
    editMateria,
    deleteMateria,
  } = useMateriaViewModel();

  return (
    <div className="materia-container">
      <h1>Materias</h1>
      <form
        className="materia-form"
        onSubmit={(e) => {
          e.preventDefault();
          addOrUpdateMateria();
        }}
      >
        <input
          type="text"
          placeholder="Nombre de la Materia"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Actualizar" : "Agregar"}</button>
      </form>
      <ul className="materia-list">
        {materias.map((m) => (
          <li key={m.id}>
            {m.name}
            <button className="edit" onClick={() => editMateria(m)}>Editar</button>
            <button className="delete" onClick={() => deleteMateria(m.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}