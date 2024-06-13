import { z } from "zod";
import { pokemonSchema, pokemonShortListSchema, pokemonSpeciesSchema } from "./schema";
import { POKEMON_TYPES } from "@/constants/pokemonTypeColor";

export type pokemonShortListType = z.infer<typeof pokemonShortListSchema>;

export type pokemonType = z.infer<typeof pokemonSchema>;

export type pokemonSpeciesType = z.infer<typeof pokemonSpeciesSchema>;

export type pokemonTypeName = typeof POKEMON_TYPES[number];