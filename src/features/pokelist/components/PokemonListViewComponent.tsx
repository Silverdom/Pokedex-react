import { Fragment } from "react";
import { usePokemonListContext } from "../hooks/usePokemonListContext";

type PokemonListViewComponentProps = {};

const PokemonListViewComponent = ({}: PokemonListViewComponentProps) => {
  const { getNextPokemons, isPokemonLoading } = usePokemonListContext();
  const pokemonListChunk = getNextPokemons(1, 10);
  if (isPokemonLoading) {
    return <p>Loading...</p>;
  }
  return pokemonListChunk.map((pokemon) => {
    return (
      <Fragment key={pokemon.name}>
        <p>{pokemon.name}</p>
      </Fragment>
    );
  });
};

export default PokemonListViewComponent;
