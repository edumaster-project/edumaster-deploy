import api from "./api";

export async function save(body, token) {
  const response = await api.post("/classes", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getInformations(token) {
    const response = await api.get('/classes', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }
  //
  