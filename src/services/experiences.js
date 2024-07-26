import { apiClient } from "./config";

export const apiAddExperience = async (payload) => {
  return apiClient.post("/experiences", payload);
};

export const apiGetExperiences = async () => {
  return apiClient.get("/experiences");
};

export const apiGetExperienceById = async (id) => {
  return apiClient.get(`/experiences/${id}`);
};

export const apiUpdateExperience = (id) => {
  return apiClient.patch(`/experiences/${id}`);
};

export const apiDeleteExperience = (id) => {
  return apiClient.delete(`/experiences/${id}`);
};
