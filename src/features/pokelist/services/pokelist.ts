import { pokemonListSchema } from "../constants/schema";
import { z } from "zod";
import { pokemonType } from "../constants/types";

let cache = new Map<string, Promise<pokemonType>>();

export const getPokemonList = (limit: number, offset: number): Promise<z.infer<typeof pokemonListSchema>> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(response => response.json());
};


export const getPokemonDetails = (pokemon: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  if (!cache.has(url)) {
    cache.set(url, fetch(url).then(response => response.json() as Promise<pokemonType>));
  }
  return cache.get(url);
};