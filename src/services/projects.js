import { apiClient } from "./config";

export const apiAddProjects = async (payload) => {
  return apiClient.post("/projects", payload);
};
export const apiGetProjects = async () => {
  return apiClient.get("/projects");
};
