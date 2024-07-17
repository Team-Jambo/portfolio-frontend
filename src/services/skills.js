import { apiClient } from "./config";

export const apiAddSkill = async (payload) => {
  return apiClient.post("/skills", payload);
};

export const apiGetSkills = async (payload) => {
  return apiClient.get("/skills");
};

export const apiGetSkillById = async (id) => {
  return apiClient.get(`/skills/${id}`);
};

export const apiUpdateSkill = (id) => {
  return apiClient.patch(`/skills/${id}`);
};

export const apiDeleteSkill = (id) => {
  return apiClient.delete(`/skills/${id}`);
};