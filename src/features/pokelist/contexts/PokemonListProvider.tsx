import { ReactNode, createContext, useEffect, useState } from "react";
import { pokemonShortListType } from "../constants/types";
import { getPokemonList } from "..";

type PokemonListProviderProps = {
  children: ReactNode;
};

type PokemonListContextType = {
  pokemonList: pokemonShortListType[];
  updatePokemonList: (pokemonList: pokemonShortListType[]) => void;
  getNextPokemons: (page: number, limit: number) => pokemonShortListType[] | [];
  isPokemonLoading: boolean;
};

export const PokemonListContext = createContext<PokemonListContextType | null>(
  null
);

const PokemonListProvider = ({ children }: PokemonListProviderProps) => {
  let [pokemonList, setPokemonList] = useState<pokemonShortListType[]>([]);
  let [isPokemonLoading, setPokemonLoading] = useState<boolean>(true);

  useEffect(() => {
    setPokemonLoading(true);
    getPokemonList(1000000, 0)
      .then((data) => {
        // console.log(data);
        setPokemonList(data.results);
      })
      .finally(() => {
        setPokemonLoading(false);
      });
  }, []);

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
      return [];
    }

    return pokemonList.slice(start, end);
  };

  return (
    <PokemonListContext.Provider
      value={{
        pokemonList,
        updatePokemonList,
        getNextPokemons,
        isPokemonLoading,
      }}
    >
      {children}
    </PokemonListContext.Provider>
  );
};

export { PokemonListProvider };
