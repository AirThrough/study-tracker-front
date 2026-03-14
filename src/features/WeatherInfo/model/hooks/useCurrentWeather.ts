import { useQuery } from "@tanstack/react-query";
import { weatherApiService } from "~/shared/api/weather.service";
import { parseWeatherInfo } from "~/entities/weather/parsers/weatherInfo.parser";
import { getWeatherFromWeatherInfo } from "~/entities/weather/utils/weather.helpers";

export const useCurrentWeather = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["currentWeather"],
    queryFn: () => weatherApiService.getWeather(),
    select: (response) => {
      const weatherInfo = parseWeatherInfo(response.data);
      if (!weatherInfo) return null;
      return getWeatherFromWeatherInfo(weatherInfo);
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  return { data, isLoading, error };
};
