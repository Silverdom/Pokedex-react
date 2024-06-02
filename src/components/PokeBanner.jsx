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
        className={`pb-12 pt-12`}
      >
        <div className="pl-28 pr-28">
          <div className="flex items-center gap-28">
            <div className="flex-1">
              <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {pokemonDetails.name}
              </h1>
              <div className="flex gap-2 mb-6">
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
              <p className="mb-3 w-[80%]">
                {pokemonSpeciesDetails.flavor_text_entries[6].flavor_text}
              </p>
              <button
                href="#_"
                class="w-96 h-12 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
              >
                Show Details
              </button>
            </div>
            <div className="flex-2">
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
      className={`pt-12 flex items-center justify-center`}
    >
      <PokemonLogo />
    </div>,
    document.getElementById("app-head")
  );
};

export default PokeBanner;
