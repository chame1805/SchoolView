
function ModelsMateria(name) {
  
    this.name =name

    if (this.name === undefined) {
      throw new Error("Name is required");
    }
    if (typeof this.name !== "string") {
      throw new Error("Name must be a string");
    }

}
export default ModelsMateria