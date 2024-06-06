import React from "react";
import { getPokemon } from "../api/fetchPokemons";
import { use } from "../utility/promiseSuspenseWrapper";

const PokemonList = () => {
  const pokemonList = use(getPokemon({ params: { limit: 1000 } }));
  console.log(pokemonList);
  return <div></div>;
};

export default PokemonList;
