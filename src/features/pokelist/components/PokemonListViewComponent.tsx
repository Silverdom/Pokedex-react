import { Suspense, useRef, useState } from "react";
import { usePokemonListContext } from "../hooks/usePokemonListContext";
import { pokemonShortListType } from "../constants/types";
import { Button } from "@/components/ui/button";
import PokemonCard, { PokemonCardSkeleton } from "./PokemonCard";

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
    <div className="flex flex-col sm:grid grid-cols-3 gap-6 items-center">
      {pokemonListRef.current.map((pokemon) => {
        return (
          <Suspense
            fallback={<PokemonCardFallbackContent />}
            key={pokemon.name}
          >
            <PokemonCard key={pokemon.name} pokemon={pokemon.name} />
          </Suspense>
        );
      })}
      {pageNumber * LIMIT >= pokemonList.length - 1 ? undefined : (
        <Button variant="outline" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </div>
  );
};

const PokemonCardFallbackContent = () => {
  const datas = Array.from(Array(LIMIT).keys());

  return datas.map((data) => <PokemonCardSkeleton key={data} />);
};

export default PokemonListViewComponent;
