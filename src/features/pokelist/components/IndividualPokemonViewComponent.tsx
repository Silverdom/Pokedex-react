import { use } from "@/lib/utils";
import { usePokemonListContext } from "../hooks/usePokemonListContext";
import {
  getPokemonDetails,
  getPokemonSpeciesDetails,
} from "../services/pokelist";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const extractPokemonDetails = (pokemon: string) => {
  const pokemonDetails = use(getPokemonDetails(pokemon));
  if (pokemonDetails === undefined) {
    throw new Error("Data not found for " + pokemon);
  }
  return pokemonDetails;
};

const extractPokemonSpeciesDetails = (pokemon: string) => {
  const pokemonDetails = use(getPokemonSpeciesDetails(pokemon));
  if (pokemonDetails === undefined) {
    throw new Error("Data not found for " + pokemon);
  }
  return pokemonDetails;
};

const IndividualPokemonViewComponent = ({
  selectedPokemon,
}: {
  selectedPokemon: string;
}) => {
  const pokemonDetails = extractPokemonDetails(selectedPokemon);
  const pokemonSpeciesDetails = extractPokemonSpeciesDetails(selectedPokemon);

  return (
    <Card className="w-[350px]">
      <div className="flex justify-center h-[350px]">
        <img src={pokemonDetails.sprites.other.dream_world.front_default} />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center">
          {pokemonDetails.name}
        </CardTitle>
        <CardDescription>
          {pokemonSpeciesDetails.flavor_text_entries[5].flavor_text}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

const IndividualPokemonViewComponentSkeleton = () => {
  return (
    <Card className="w-[350px]">
      <div className="flex justify-center h-[350px]">
        <Skeleton className="w-full" />
      </div>
      <CardHeader>
        {/* <CardTitle className="flex items-center"> */}
        <Skeleton className="h-6" />
        {/* </CardTitle> */}
        {/* <CardDescription> */}
        <Skeleton className="h-12 w-full" />
        {/* </CardDescription> */}
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export {
  IndividualPokemonViewComponent,
  IndividualPokemonViewComponentSkeleton,
};
