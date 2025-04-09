function Alumno(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  
    this.isValid = () => {
      return this.nombre && this.telefono;
    };
  }
  
  export default Alumno;
  