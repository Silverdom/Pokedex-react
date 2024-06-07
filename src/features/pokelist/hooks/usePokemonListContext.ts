import { useContext } from "react";
import { PokemonListContext } from "../contexts/PokemonListProvider";

export const usePokemonListContext = () => {
  const contextData = useContext(PokemonListContext);

  if (contextData === null) {
    throw new Error("PokemonList Context data must be used inside Pokemon Context Provider");
  }

  return contextData;
};