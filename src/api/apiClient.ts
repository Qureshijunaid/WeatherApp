import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

import constant from "../constant/constant";

// Create and configure Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: constant.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor – useful for adding auth tokens or custom headers
apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Example: Add auth token if needed
    // const token = getAuthToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: AxiosError) => {
    // Optional: Log request error
    return Promise.reject(error);
  }
);

// Response interceptor – handles global errors or response formatting
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Optional: Handle specific error codes globally
    // if (error.response?.status === 401) redirectToLogin();
    return Promise.reject(error);
  }
);

export default apiClient;
