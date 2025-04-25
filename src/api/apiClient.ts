import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import constant from "../constant/constant";

const apiClient: AxiosInstance = axios.create({
  baseURL: constant.baseURL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config,
  (error) => Promise.reject({ message: error.message })
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError = {
      message: error.response?.data?.message || "Something went wrong",
      statusCode: error.response?.status,
    };
    return Promise.reject(customError);
  }
);

export default apiClient;
