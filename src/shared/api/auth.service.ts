import type { AxiosInstance, AxiosRequestConfig } from "axios";

import { api } from "./api";
import { z } from "zod";

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
    }: RequestConfig<LoginRequestData>): Promise<string> => {
      const response = await $api.post("/auth/login", data, config);
      return z.parse(z.string(), response.data.token);
    },
  };
};

export const authApiService = createAuthApiService(api);
