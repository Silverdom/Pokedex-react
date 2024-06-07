import { z } from "zod";
import { pokemonSchema, pokemonShortListSchema, pokemonSpeciesSchema } from "./schema";

export type pokemonShortListType = z.infer<typeof pokemonShortListSchema>;

export type pokemonType = z.infer<typeof pokemonSchema>;

export type pokemonSpeciesType = z.infer<typeof pokemonSpeciesSchema>;