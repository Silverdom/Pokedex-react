import React, { Suspense } from "react";
import PokeBanner from "./PokeBanner";

const PokeHeader = () => {
  const randomPokemonId = Math.floor(
    Math.random() * import.meta.env.VITE_TOTAL_POKEMON
  );
  return (
    <>
      <Suspense fallback="Loading">
        <PokeBanner pokemonId={6} />
      </Suspense>
    </>
  );
};

export default PokeHeader;
