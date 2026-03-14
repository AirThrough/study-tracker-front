import { z } from "zod";

export const weatherSchema = z.object({
  isRainy: z.boolean(),
  nextRainyTime: z.string(),
});

export type WeatherDto = z.infer<typeof weatherSchema>;
