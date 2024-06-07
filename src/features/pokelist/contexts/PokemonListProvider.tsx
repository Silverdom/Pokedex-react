import { ReactNode, createContext, useEffect, useState } from "react";
import { pokemonShortListType } from "../constants/types";
import { getPokemonList } from "..";

type PokemonListProviderProps = {
  children: ReactNode;
};

type PokemonListContextType = {
  pokemonList: pokemonShortListType[];
  updatePokemonList: (pokemonList: pokemonShortListType[]) => void;
  isPokemonLoading: boolean;
  selectedPokemon: string;
  selectPokemon: (pokemon: string) => void;
};

export const PokemonListContext = createContext<PokemonListContextType | null>(
  null
);

const PokemonListProvider = ({ children }: PokemonListProviderProps) => {
  let [pokemonList, setPokemonList] = useState<pokemonShortListType[]>([]);
  let [isPokemonLoading, setPokemonLoading] = useState<boolean>(true);
  let [selectedPokemon, setSelectedPokemon] = useState<string>("");

  useEffect(() => {
    setPokemonLoading(true);
    getPokemonList(1000000, 0)
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
      })
      .finally(() => {
        console.log("got pokemon list");
        setPokemonLoading(false);
      });
  }, []);

  const selectPokemon = (pokemon: string) => {
    setSelectedPokemon(pokemon);
  };

  const updatePokemonList = (pokemonList: pokemonShortListType[]) => {
    setPokemonList(pokemonList);
  };

  return (
    <PokemonListContext.Provider
      value={{
        pokemonList,
        updatePokemonList,
        isPokemonLoading,
        selectedPokemon,
        selectPokemon,
      }}
    >
      {children}
    </PokemonListContext.Provider>
  );
};

export { PokemonListProvider };
