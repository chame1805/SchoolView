const API_URL = "http://localhost:8080";

const apiService = {
  get: async (endpoint) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`);
      if (!res.ok) throw new Error(`Error en GET ${endpoint}: ${res.status} - ${res.statusText}`);
      const data = await res.json();
      console.log(`GET ${endpoint} ->`, data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  post: async (endpoint, data) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name }),
      });
      if (!res.ok) throw new Error(`Error en POST ${endpoint}: ${res.status} - ${res.statusText}`);
      console.log(`POST ${endpoint} ->`, await res.json());
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  put: async (endpoint, data) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name }),
      });
      if (!res.ok) throw new Error(`Error en PUT ${endpoint}: ${res.status} - ${res.statusText}`);
      console.log(`PUT ${endpoint} ->`, await res.json());
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  delete: async (endpoint) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Error en DELETE ${endpoint}: ${res.status} - ${res.statusText}`);
      console.log(`DELETE ${endpoint} -> Success`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default apiService;
