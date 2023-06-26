import api from "./api";

export async function signUp(form) {
  const response = await api.post("/users/sign-up", form);
  return response.data;
}
