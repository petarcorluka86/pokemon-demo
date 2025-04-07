import { fetchPokemons } from "@/utils/api";
import { PokemonListItemServer } from "@/components/PokemonLiServer";
import { Suspense } from "react";
import { PokemonListItemUI } from "@/predefined/ui/PokemonLiUI";
import PokemonGrid from "@/predefined/ui/PokemonGrid";

export default async function Pokemons() {
  const data = await fetchPokemons();

  return (
    <PokemonGrid
      title="Browse pokemons"
      isLoading={false}
      isEmpty={!data?.results.length}
    >
      {data?.results.map((pokemonListItem) => (
        <Suspense key={pokemonListItem.name} fallback={<PokemonListItemUI />}>
          <PokemonListItemServer name={pokemonListItem.name} />
        </Suspense>
      ))}
    </PokemonGrid>
  );
}
