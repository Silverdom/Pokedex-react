import { baseApi } from "./base";
// We need to use a storage to store the promises such that we have access to the running promise and it does not create a new promise every time which will make the compoenent fall into an endless loop
let cache = new Map();

export function getPokemon(searchBy, options) {
  let url = `https://pokeapi.co/api/v2/pokemon/${searchBy}`;
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url, options).then((res) => res.json())
    );
  }
  return cache.get(url);
}
export function getPokemonSpecies(searchBy, options) {
  let url = `https://pokeapi.co/api/v2/pokemon-species/${searchBy}`;
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url, options).then((res) => res.json())
    );
  }
  return cache.get(url);
}
