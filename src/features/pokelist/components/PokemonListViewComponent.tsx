import { useRef, useState } from "react";
import { usePokemonListContext } from "../hooks/usePokemonListContext";
import { pokemonShortListType } from "../constants/types";
import { Button } from "@/components/ui/button";

type PokemonListViewComponentProps = {};

const LIMIT = 15;

const getNextPokemons = (
  page: number,
  limit: number,
  pokemonList: pokemonShortListType[]
) => {
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

const PokemonListViewComponent = ({}: PokemonListViewComponentProps) => {
  const { pokemonList } = usePokemonListContext();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const pokemonListRef = useRef<pokemonShortListType[]>(
    getNextPokemons(pageNumber, LIMIT, pokemonList)
  );

  const handleLoadMore = () => {
    pokemonListRef.current = [
      ...pokemonListRef.current,
      ...getNextPokemons(pageNumber + 1, LIMIT, pokemonList),
    ];
    setPageNumber((p) => p + 1);
  };

  return (
    <>
      {pokemonListRef.current.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
      {pageNumber * LIMIT >= pokemonList.length - 1 ? undefined : (
        <Button variant="outline" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default PokemonListViewComponent;
