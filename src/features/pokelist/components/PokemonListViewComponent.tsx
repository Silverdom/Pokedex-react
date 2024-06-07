import { Fragment, useLayoutEffect } from "react";
import { usePokemonListContext } from "../hooks/usePokemonListContext";
import { pokemonShortListType } from "../constants/types";

type PokemonListViewComponentProps = {};

const PokemonListViewComponent = ({}: PokemonListViewComponentProps) => {
  const { getNextPokemons } = usePokemonListContext();
  const pokemonListChunk = getNextPokemons(1, 10);

  return pokemonListChunk.map((pokemon) => {
    return (
      <Fragment key={pokemon.name}>
        <p>{pokemon.name}</p>
      </Fragment>
    );
  });
};

export default PokemonListViewComponent;
