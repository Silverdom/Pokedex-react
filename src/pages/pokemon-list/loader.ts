import { getPokemonList } from "@/features/components/pokelist";
import { deferredLoader } from "@/lib/ReactRoute";

export const loader = deferredLoader(() => {
  return { pokemonListPromise: getPokemonList(100000, 0) };
});