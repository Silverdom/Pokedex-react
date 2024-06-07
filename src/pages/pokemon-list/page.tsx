import {
  IndividualPokemonViewComponent,
  PokemonListFiltersComponent,
} from "@/features/pokelist";
import PokemonListViewComponent from "@/features/pokelist/components/PokemonListViewComponent";

export const PokemonListPage = () => {
  return (
    <div className="flex flex-row gap-4 justify-between">
      <section className="flex flex-col gap-10">
        <PokemonListFiltersComponent />
        <div>
          <div className="grid grid-cols-3 gap-4">
            <PokemonListViewComponent />
          </div>
        </div>
      </section>
      <section>
        <IndividualPokemonViewComponent />
      </section>
    </div>
  );
};
