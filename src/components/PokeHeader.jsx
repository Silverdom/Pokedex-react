import React, { Suspense } from "react";
import PokeBanner from "./PokeBanner";

const PokeHeader = () => {
  return (
    <>
      <Suspense fallback="Loading">
        <PokeBanner pokemonId={6} />
      </Suspense>
    </>
  );
};

export default PokeHeader;
