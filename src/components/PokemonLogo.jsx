import React from "react";
import pokeLogo from "/pokedexplore.svg";

const PokemonLogo = () => {
  return (
    <section>
      <img
        loading="lazy"
        draggable="false"
        width="300"
        src={pokeLogo}
        alt="PokédExplore"
      />
    </section>
  );
};

export default PokemonLogo;
