import { POKEMON_TYPES } from "@/constants/pokemonTypeColor";
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

export const pokemonSpeciesSchema = z.object({
  flavor_text_entries: z.array(z.object({
    flavor_text: z.string(),
    language: z.object({
      name: z.string(),
    })
  }))
});

export const pokemonSchema = z.object({
  name: z.string(),
  id: z.number(),
  height: z.number(),
  weight: z.number(),
  base_experience: z.number(),
  sprites: z.object({
    other: z.object({
      dream_world: z.object({
        front_default: z.string()
      }),
      showdown: z.object({
        front_default: z.string()
      })
    })
  }),
  types: z.array(z.object({
    slot: z.number(),
    type: z.object({
      name: z.enum(POKEMON_TYPES),
      url: z.string()
    })
  })),
  abilities: z.array(z.object({
    ability: z.object({
      name: z.string(),
      url: z.string(),
    }),
    is_hidden: z.boolean()
  })),
  stats: z.array(z.object({
    base_stat: z.number(),
    effort: z.number(),
    stat: z.object({
      name: z.string(),
      url: z.string()
    })
  }))
});

export const filters = z.object({
  search: z.string(),
  min: z.number(),
  max: z.number(),
  type: z.enum(POKEMON_TYPES),
});