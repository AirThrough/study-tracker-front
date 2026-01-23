import type { AxiosInstance, AxiosRequestConfig } from "axios";

import { api } from "./api";

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

type LoginRequestData = {
  email: string;
  password: string;
};

type RequestConfig<T> = {
  data: T;
  config?: AxiosRequestConfig;
};

const createAuthApiService = ($api: AxiosInstance) => {
  return {
    login: async ({
      data,
      config,
    }: RequestConfig<LoginRequestData>): Promise<LoginResponse> => {
      return await $api.post("/auth/login", data, config);
    },
  };
};

export const authApiService = createAuthApiService(api);
