import { z } from "zod";
import { pokemonSchema, pokemonShortListSchema } from "./schema";

export type pokemonShortListType = z.infer<typeof pokemonShortListSchema>;

export type pokemonType = z.infer<typeof pokemonSchema>;