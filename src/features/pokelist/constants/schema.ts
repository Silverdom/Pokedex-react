import { z } from "zod";

export const pokemonShortListSchema = z.object({
  name: z.string(),
  url: z.string()
});

export const pokemonListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(pokemonShortListSchema)
});