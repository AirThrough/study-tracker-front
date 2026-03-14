import type { WeatherInfoDto } from "../dtos";

export const getWeatherFromWeatherInfo = (weatherInfo: WeatherInfoDto) => {
  const nextRainyTimeIndex = weatherInfo.hourly.rain.findIndex(
    (rain) => rain > 0,
  );
  const nextRainyTime = new Date(
    Date.now() + nextRainyTimeIndex * 60 * 60 * 1000,
  );
  return {
    isRainy: weatherInfo.current.rain > 0,
    nextRainyTime,
  };
};
