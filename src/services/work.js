import { apiClient } from "./config";

export const apiGetWork = async () => {
  return apiClient.get("/work");
};
