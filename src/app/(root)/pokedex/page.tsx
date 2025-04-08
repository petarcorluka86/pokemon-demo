"use client";

import { PokemonListItemClient } from "@/components/PokemonLiClient";

import PokemonGrid from "@/predefined/ui/PokemonGrid";
import { usePokedex } from "@/predefined/PokedexContext";
import PokemonsSkeleton from "@/predefined/ui/PokemonSkeleton";

export default function PokedexPage() {
  const { pokedex, isLoading } = usePokedex();

  if (isLoading) {
    return <PokemonsSkeleton />;
  }

  return (
    <PokemonGrid
      title="This is your Pokedex"
      isLoading={isLoading}
      isEmpty={!pokedex?.length}
    >
      {pokedex?.map((pokemon) => (
        <PokemonListItemClient key={pokemon} name={pokemon} />
      ))}
    </PokemonGrid>
  );
}
