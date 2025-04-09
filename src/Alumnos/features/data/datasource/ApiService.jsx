const API_URL = "http://localhost:8080";

const apiService = {
  get: async (endpoint) => {
    const res = await fetch(`${API_URL}${endpoint}`);
    return res.json();
  },
  post: async (endpoint, data) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json(); // Asegúrate de retornar la respuesta si la usas
  },
  put: async (endpoint, data) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  delete: async (endpoint) => {
    const res = await fetch(`${API_URL}${endpoint}`, { method: "DELETE" });
    return res.json();
  },
};

export default apiService;
