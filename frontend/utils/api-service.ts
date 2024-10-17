import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.35.154:8000/v1", // Your base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN", // Optional: if you have an access token
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export const sendOtpToMail = async (email: string): Promise<AxiosResponse> => {
  return await axiosInstance.post("/user/send-otp", { email });
};
export const APIVerifyOtpToMail = async (
  email: string,
  otp: string
): Promise<AxiosResponse> => {
  return await axiosInstance.post("/user/verify-otp", { email, otp });
};
