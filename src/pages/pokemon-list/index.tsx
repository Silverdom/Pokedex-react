import { loader } from "@/pages/pokemon-list/loader";
import { PokemonListPage } from "./page";

export const pokemonListPageRoute = {
  loader,
  element: <PokemonListPage />,
};
