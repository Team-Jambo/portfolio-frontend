import { apiClient, clearDetails } from "./config";

export const apiSignUp = async (payload) => {
  return apiClient.post("/auth/signup", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/auth/token", payload);
};

export const apiLogout = async () => {
  clearDetails();
};

export const apiCheckUserNameExist = async (userName) => {
  return apiClient.get(`/auth/${userName}`);
};
