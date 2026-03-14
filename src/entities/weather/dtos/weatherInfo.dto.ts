import { z } from "zod";

export const currentWeatherSchema = z.object({
  rain: z.number(),
  time: z.string(),
});

export type CurrentWeatherDto = z.infer<typeof currentWeatherSchema>;

export const hourlyWeatherSchema = z.object({
  rain: z.array(z.number()),
  time: z.array(z.string()),
});

export type HourlyWeatherDto = z.infer<typeof hourlyWeatherSchema>;

export const weatherInfoSchema = z.object({
  current: currentWeatherSchema,
  hourly: hourlyWeatherSchema,
});

export type WeatherInfoDto = z.infer<typeof weatherInfoSchema>;
