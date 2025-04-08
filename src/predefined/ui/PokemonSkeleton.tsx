import { PokemonListItemUI } from "@/predefined/ui/PokemonLiUI";
import PokemonGrid from "@/predefined/ui/PokemonGrid";

export default function PokemonsSkeleton() {
  return (
    <PokemonGrid title="Loading..." isLoading={true} isEmpty={false}>
      {Array.from({ length: 40 }).map((_, index) => (
        <PokemonListItemUI key={index} />
      ))}
    </PokemonGrid>
  );
}
