import React, { ReactNode, createContext, useState } from "react";
import { pokemonShortListType } from "../constants/types";

type PokemonListProviderProps = {
  children: ReactNode;
};

type PokemonListContextType = {
  pokemonList: pokemonShortListType[];
  updatePokemonList: (pokemonList: pokemonShortListType[]) => void;
  getNextPokemons: (
    page: number,
    limit: number
  ) => pokemonShortListType[] | undefined;
};

export const PokemonListContext = createContext<PokemonListContextType | null>(
  null
);

const PokemonListProvider = ({ children }: PokemonListProviderProps) => {
  let [pokemonList, setPokemonList] = useState<pokemonShortListType[]>([]);

  const updatePokemonList = (pokemonList: pokemonShortListType[]) => {
    setPokemonList(pokemonList);
  };

  const getNextPokemons = (page: number, limit: number) => {
    const totalPokemons = pokemonList.length;
    const start = (page - 1) * limit;
    let end = start + limit;
    if (end > totalPokemons) {
      end = totalPokemons;
    }
    if (start >= totalPokemons) {
      return undefined;
    }

    return pokemonList.slice(start, end);
  };

  return (
    <PokemonListContext.Provider
      value={{ pokemonList, updatePokemonList, getNextPokemons }}
    >
      {children}
    </PokemonListContext.Provider>
  );
};

export { PokemonListProvider };
