import {
  IndividualPokemonViewComponent,
  IndividualPokemonViewComponentSkeleton,
  PokemonListFiltersComponent,
} from "@/features/pokelist";
import PokemonListViewComponent from "@/features/pokelist/components/PokemonListViewComponent";
import { usePokemonListContext } from "@/features/pokelist/hooks/usePokemonListContext";
import { Suspense } from "react";

export const PokemonListPage = () => {
  const { isPokemonLoading, selectedPokemon } = usePokemonListContext();
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <section className="w-full">
        <PokemonListFiltersComponent />
        <div>{!isPokemonLoading && <PokemonListViewComponent />}</div>
      </section>
      <section className="flex justify-center items-center sm:items-start">
        {selectedPokemon !== "" && (
          <Suspense fallback={<IndividualPokemonViewComponentSkeleton />}>
            <IndividualPokemonViewComponent selectedPokemon={selectedPokemon} />
          </Suspense>
        )}
      </section>
    </div>
  );
};
