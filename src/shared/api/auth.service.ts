import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { AxiosResponse } from "axios";
import { api } from "./api";
import { z } from "zod";

type LoginRequestData = {
  email: string;
  password: string;
};

type RequestConfig<T> = {
  data: T;
  config?: AxiosRequestConfig;
};

type AuthEndpoints = {
  login: string;
  logout: string;
  getUser: string;
};

const authEndpoints: AuthEndpoints = {
  login: "/auth/login",
  logout: "/auth/logout",
  getUser: "/auth/users/me",
};

const createAuthApiService = (
  $api: AxiosInstance,
  endpoints: AuthEndpoints,
) => {
  return {
    login: async ({
      data,
      config,
    }: RequestConfig<LoginRequestData>): Promise<string> => {
      const response = await $api.post(endpoints.login, data, config);
      return z.parse(z.string(), response.data.token);
    },

    logout: async (): Promise<void> => {
      return await $api.post(endpoints.logout);
    },

    getUser: async (): Promise<AxiosResponse<unknown>> => {
      return await $api.get(endpoints.getUser);
    },
  };
};

export const authApiService = createAuthApiService(api, authEndpoints);
