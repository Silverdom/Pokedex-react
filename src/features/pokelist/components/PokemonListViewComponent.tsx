import { useLayoutEffect } from "react";
import { usePokemonListContext } from "../hooks/usePokemonListContext";
import { pokemonShortListType } from "../constants/types";

type PokemonListViewComponentProps = {
  pokemonList: pokemonShortListType[];
};

const PokemonListViewComponent = ({
  pokemonList,
}: PokemonListViewComponentProps) => {
  const { pokemonList: pokemons, updatePokemonList } = usePokemonListContext();

  useLayoutEffect(() => {
    updatePokemonList(pokemonList);
  });

  return pokemons.map((pokemon) => {
    return (
      <>
        <p>{pokemon.name}</p>
      </>
    );
  });
};

export default PokemonListViewComponent;
