import { use } from "@/lib/utils";
import { getPokemonDetails } from "../services/pokelist";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePokemonListContext } from "../hooks/usePokemonListContext";
import { POKEMON_TYPES } from "@/constants/pokemonTypeColor";
import { pokemonTypeName } from "../constants/types";

const extractPokemonDetails = (pokemon: string) => {
  const pokemonDetails = use(getPokemonDetails(pokemon));
  if (pokemonDetails === undefined) {
    throw new Error("Data not found for " + pokemon);
  }
  return pokemonDetails;
};

type Colors = {
  [key in pokemonTypeName]?: string;
};

const colors: Colors = {};

for (let i = 0; i < POKEMON_TYPES.length; i++) {
  const pokemonType = POKEMON_TYPES[i];
  colors[pokemonType] = `bg-${pokemonType}`;
}

const PokemonCard = ({ pokemon }: { pokemon: string }) => {
  const pokemonDetails = extractPokemonDetails(pokemon);
  const { selectPokemon, selectedPokemon } = usePokemonListContext();
  return (
    <Card
      className={`w-[250px] ${
        selectedPokemon === pokemonDetails.name ? "scale-105" : undefined
      } transition duration-100 hover:scale-105 cursor-pointer`}
      onClick={() => selectPokemon(pokemonDetails.name)}
    >
      <div className="flex justify-center h-[100px]">
        <img src={pokemonDetails.sprites.other.showdown.front_default} />
      </div>
      <CardHeader>
        <CardDescription>{pokemonDetails.id}</CardDescription>
        <CardTitle>{pokemonDetails.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 justify-evenly">
        {pokemonDetails.types.map((type) => (
          <Button
            variant="outline"
            key={type.type.name}
            className={colors[type.type.name] ?? undefined}
          >
            {type.type.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export const PokemonCardSkeleton = () => {
  return (
    <Card className="w-[250px] h-[250px]">
      <div className="flex justify-center h-[100px] mb-3">
        <Skeleton className="w-[100px]" />
      </div>
      <CardHeader>
        <span className="flex justify-center">
          <Skeleton className="h-2 w-10" />
        </span>
        {/* <CardTitle> */}
        <Skeleton className="h-6" />
        {/* </CardTitle> */}
      </CardHeader>
      <CardContent className="flex gap-4 justify-evenly">
        {/* <Button> */}
        <Skeleton className="h-10 w-[100px]" />
        {/* </Button> */}
        {/* <Button> */}
        <Skeleton className="h-10 w-[100px]" />
        {/* </Button> */}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
