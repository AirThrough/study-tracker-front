import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

const $weatherApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});

type WeatherEndpoints = {
  getWeather: string;
};

const weatherEndpoints: WeatherEndpoints = {
  getWeather: "",
};

type Coordinates = {
  latitude: number;
  longitude: number;
};

const weatherQuery = {
  latitude: 57.6299,
  longitude: 39.8737,
  hourly: ["rain"],
  current: ["rain"],
  forecast_days: 3,
};

const createWeatherApiService = (
  $api: AxiosInstance,
  endpoints: WeatherEndpoints,
) => {
  const abortControllers: Record<string, AbortController> = {};
  return {
    getWeather: async (): Promise<AxiosResponse<unknown>> => {
      abortControllers[endpoints.getWeather]?.abort();
      abortControllers[endpoints.getWeather] = new AbortController();
      return await $api.get(endpoints.getWeather, {
        params: weatherQuery,
        signal: abortControllers[endpoints.getWeather].signal,
      });
    },
  };
};

export const weatherApiService = createWeatherApiService(
  $weatherApi,
  weatherEndpoints,
);
