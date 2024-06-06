import { baseApi } from "./base";
// We need to use a storage to store the promises such that we have access to the running promise and it does not create a new promise every time which will make the compoenent fall into an endless loop
let cache = new Map();

export function getPokemon({ pokemonId = "", params, options }) {
  let searchParams = new URLSearchParams(params);
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}?${searchParams.toString()}`;
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url, options).then((res) => res.json())
    );
  }
  return cache.get(url);
}
export function getPokemonSpecies({ pokemonId, options }) {
  let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url, options).then((res) => res.json())
    );
  }
  return cache.get(url);
}
