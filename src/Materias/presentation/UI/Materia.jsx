import useMateriaViewModel from "../UseMateria";

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
      <h1>Materia</h1>
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
        {materias.map((materia) => (
          <li key={materia.id}>
            {materia.name}
            <button className="edit" onClick={() => editMateria(materia)}>Editar</button>
            <button className="delete" onClick={() => deleteMateria(materia.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
