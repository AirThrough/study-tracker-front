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
  hourly: [
    "temperature_2m",
    "weather_code",
    "rain",
    "showers",
    "precipitation",
    "precipitation_probability",
    "apparent_temperature",
    "dew_point_2m",
    "snowfall",
    "snow_depth",
    "relative_humidity_2m",
  ],
  current: [
    "temperature_2m",
    "relative_humidity_2m",
    "rain",
    "showers",
    "snowfall",
    "precipitation",
  ],
  forecast_days: 3,
};

const createWeatherApiService = (
  $api: AxiosInstance,
  endpoints: WeatherEndpoints,
) => {
  return {
    getWeather: async (): Promise<AxiosResponse<unknown>> => {
      return await $api.get(endpoints.getWeather, { params: weatherQuery });
    },
  };
};

export const weatherApiService = createWeatherApiService(
  $weatherApi,
  weatherEndpoints,
);
