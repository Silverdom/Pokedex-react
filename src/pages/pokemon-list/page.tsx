import { Suspense } from "react";
import { loader } from "./loader";
import { Await, useDeferredLoaderData } from "@/lib/ReactRoute";

export const PokemonListPage = () => {
  const { pokemonListPromise } = useDeferredLoaderData<typeof loader>();
  return (
    <div>
      <Suspense fallback="Loading...">
        <Await resolve={pokemonListPromise}>
          {(data) => {
            console.log(data);
            return "PokemonListPage";
          }}
        </Await>
      </Suspense>
    </div>
  );
};
