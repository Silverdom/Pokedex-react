import { getPokemonList } from "@/features/pokelist";
import { deferredLoader } from "@/lib/ReactRoute";

export const loader = deferredLoader(() => {
  return { pokemonListPromise: getPokemonList(100000, 0) };
});