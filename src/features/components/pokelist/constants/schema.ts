import { z } from "zod";

const pokemonShortListSchema = z.object({
  name: z.string(),
  url: z.string()
});

export const pokemonListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  result: z.array(pokemonShortListSchema)
});