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

const extractPokemonDetails = (pokemon: string) => {
  const pokemonDetails = use(getPokemonDetails(pokemon));
  if (pokemonDetails === undefined) {
    throw new Error("Data not found for " + pokemon);
  }
  return pokemonDetails;
};

const PokemonCard = ({ pokemon }: { pokemon: string }) => {
  const pokemonDetails = extractPokemonDetails(pokemon);
  return (
    <Card className="w-[250px]">
      <div className="flex justify-center h-[35%]">
        <img src={pokemonDetails.sprites.other.showdown.front_default} />
      </div>
      <CardHeader>
        <CardDescription>{pokemonDetails.id}</CardDescription>
        <CardTitle>{pokemonDetails.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 justify-evenly">
        {pokemonDetails.types.map((type) => (
          <Button key={type.type.name}>{type.type.name}</Button>
        ))}
      </CardContent>
    </Card>
  );
};

export const PokemonCardSkeleton = () => {
  return (
    <Card className="w-[250px] h-[250px]">
      <div className="flex justify-center h-[35%] mb-3">
        <Skeleton className="h-[100px] w-[100px]" />
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
