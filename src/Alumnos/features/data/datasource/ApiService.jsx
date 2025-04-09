const API_URL = "http://localhost:8080";

const apiService = {
  get: async (endpoint) => {
    const res = await fetch(`${API_URL}${endpoint}`);
    return res.json();
  },
  post: async (endpoint, data) => {
    await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
  put: async (endpoint, data) => {
    await fetch(`${API_URL}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
  delete: async (endpoint) => {
    await fetch(`${API_URL}${endpoint}`, { method: "DELETE" });
  },
};

export default apiService;
