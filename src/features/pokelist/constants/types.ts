import { z } from "zod";
import { pokemonShortListSchema } from "./schema";

export type pokemonShortListType = z.infer<typeof pokemonShortListSchema>;