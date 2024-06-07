import { Suspense } from "react";
import { loader } from "./loader";
import { Await, useDeferredLoaderData } from "@/lib/ReactRoute";
import {
  IndividualPokemonViewComponent,
  PokemonListFiltersComponent,
} from "@/features/pokelist";
import PokemonListViewComponent from "@/features/pokelist/components/PokemonListViewComponent";

export const PokemonListPage = () => {
  const { pokemonListPromise } = useDeferredLoaderData<typeof loader>();
  return (
    <div className="flex flex-row gap-4 justify-between">
      <section className="flex flex-col gap-10">
        <PokemonListFiltersComponent />
        <div>
          <Suspense fallback="Loading...">
            <Await resolve={pokemonListPromise}>
              {(data) => (
                <div className="grid grid-cols-3 gap-4">
                  <PokemonListViewComponent pokemonList={data.results} />
                </div>
              )}
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
