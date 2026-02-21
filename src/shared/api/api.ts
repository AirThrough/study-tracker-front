import axios from "axios";

export const BASE_API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: BASE_API_URL,
});

export type ApiError = {
  code: string;
  message: string;
  originalError: Error;
};

export type ApiResponse<T, E = ApiError> = {
  data: T;
  error: E;
};
