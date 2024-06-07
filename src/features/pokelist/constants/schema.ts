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

export const pokemonSchema = z.object({
  name: z.string(),
  id: z.number(),
  sprites: z.object({
    other: z.object({
      showdown: z.object({
        front_default: z.string()
      })
    })
  })
  types: z.array(z.object({
    slot: z.number(),
    type: z.object({
      name: z.string(),
      url: z.string()
    })
  }))
});