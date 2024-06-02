import { use } from "../utility/promiseSuspenseWrapper";
import { getPokemon, getPokemonSpecies } from "../api/fetchPokemons";
import { createPortal } from "react-dom";
import PokemonLogo from "./PokemonLogo";
import { pokemonTypeColorCodes } from "../utility/pokemonTypeColorCodes";

const PokeBanner = ({ pokemonId = 6 }) => {
  const pokemonDetails = use(getPokemon(pokemonId));
  const pokemonTheme = pokemonDetails.types[0].type.name;
  const pokemonSpeciesDetails = use(getPokemonSpecies(pokemonId));
  const sourceProjectEndpoint = import.meta.env.VITE_SOURCE_URL;

  return (
    <>
      <div
        id="Home"
        style={{
          backgroundColor: pokemonTypeColorCodes[pokemonTheme],
        }}
        className={`pb-5 mb-5 position-relative overflow-hidden container-fluid`}
      >
        <div className="py-5 container">
          <div className="align-items-center row">
            <div className="py-5 order-last order-lg-first col-xl-6 col-sm-12">
              <h1 value="PokédExplore">{pokemonDetails.name}</h1>
              <div className="d-flex gap-2 mb-3 fade-in-top">
                {pokemonDetails.types.map((type) => (
                  <img
                    key={type.type.name}
                    loading="lazy"
                    draggable="false"
                    width="40"
                    src={`${sourceProjectEndpoint}/types/${type.type.name}.svg`}
                    alt="Grass"
                  />
                ))}
              </div>
              <p className="mb-3">
                {pokemonSpeciesDetails.flavor_text_entries[6].flavor_text}
              </p>
              <button type="button" className="button-primary w-100">
                Show Details
              </button>
            </div>
            <div className="col-xl-6 col-sm-12">
              <img
                loading="lazy"
                draggable="false"
                width="100%"
                src={pokemonDetails.sprites.other.dream_world.front_default}
                alt={pokemonDetails.sprites.other.dream_world.front_default}
              />
            </div>
          </div>
        </div>
      </div>
      <PokemonHeaderLogo pokemonTheme={pokemonTheme} />
    </>
  );
};
const PokemonHeaderLogo = ({ pokemonTheme }) => {
  console.log(pokemonTheme);
  return createPortal(
    <div
      style={{ backgroundColor: pokemonTypeColorCodes[pokemonTheme] }}
      className={`bg-${pokemonTheme} d-flex align-items-center justify-content-center`}
    >
      <PokemonLogo />
    </div>,
    document.getElementById("app-head")
  );
};

export default PokeBanner;
