import { weatherInfoSchema, type WeatherInfoDto } from "../dtos";

export const parseWeatherInfo = (response: any): WeatherInfoDto | null => {
  try {
    return weatherInfoSchema.parse(response);
  } catch (error) {
    console.log("Error parsing weather info:", error);
    return null;
  }
};
