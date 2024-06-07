import { Suspense } from "react";
import { loader } from "./loader";
import { Await, useDeferredLoaderData } from "@/lib/ReactRoute";
import {
  IndividualPokemonViewComponent,
  PokemonListFiltersComponent,
} from "@/features/pokelist";
import PokemonListViewComponent from "@/features/pokelist/components/PokemonListViewComponent";
import { usePokemonListContext } from "@/features/pokelist/hooks/usePokemonListContext";

export const PokemonListPage = () => {
  const { pokemonListPromise } = useDeferredLoaderData<typeof loader>();
  const { updatePokemonList } = usePokemonListContext();
  return (
    <div className="flex flex-row gap-4 justify-between">
      <section className="flex flex-col gap-10">
        <PokemonListFiltersComponent />
        <div>
          <Suspense fallback="Loading...">
            <Await resolve={pokemonListPromise}>
              {(data) => {
                updatePokemonList(data.results);
                return (
                  <div className="grid grid-cols-3 gap-4">
                    <PokemonListViewComponent />
                  </div>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </section>
      <section>
        <IndividualPokemonViewComponent />
      </section>
    </div>
  );
};
