import api from "./api";

export async function signIn(form) {
  const response = await api.post("/users/sign-in", form);
  return response.data;
}
