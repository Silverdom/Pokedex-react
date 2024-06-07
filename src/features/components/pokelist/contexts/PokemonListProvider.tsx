import React, { ReactNode, createContext, useState } from "react";
import { pokemonShortListType } from "../constants/types";

type PokemonListProviderProps = {
  children: ReactNode;
};

type PokemonListContextType = {
  pokemonList: pokemonShortListType[];
  updatePokemonList: (pokemonList: pokemonShortListType[]) => void;
};

const PokemonListContext = createContext<PokemonListContextType | null>(null);

const PokemonListProvider = ({ children }: PokemonListProviderProps) => {
  let [pokemonList, setPokemonList] = useState<pokemonShortListType[]>([]);

  const updatePokemonList = (pokemonList: pokemonShortListType[]) => {
    setPokemonList(pokemonList);
  };

  return (
    <PokemonListContext.Provider value={{ pokemonList, updatePokemonList }}>
      {children}
    </PokemonListContext.Provider>
  );
};

export { PokemonListProvider };
