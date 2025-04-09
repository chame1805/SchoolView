export default function ModelsMateria(name) {
  if (name === undefined || name === null) {
    throw new Error("Name is required");
  }
  if (typeof name !== "string") {
    throw new Error("Name must be a string");
  }
  this.name = name;
}
