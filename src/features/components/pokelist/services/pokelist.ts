import { baseApi } from "@/services/baseapi";
import { pokemonListSchema } from "../constants/schema";
import { z } from "zod";

export const getPokemonList = (limit: number, offset: number): Promise<z.infer<typeof pokemonListSchema>> => {
  return fetch("https://pokeapi.co/api/v2/pokemon").then(response => response.json());
  return baseApi.get(`pokemon/?limit=${limit}&offset=${offset}`).then(res => res.data);
};