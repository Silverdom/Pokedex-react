import { Suspense } from "react";
import PokeHeader from "./components/PokeHeader";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <>
      <PokeHeader />
      <Suspense>
        <PokemonList />
      </Suspense>
    </>
  );
}

export default App;
