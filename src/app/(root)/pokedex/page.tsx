"use client";

import { PokemonListItemClient } from "@/components/PokemonLiClient";

import PokemonGrid from "@/predefined/ui/PokemonGrid";
import { PokemonListItemUI } from "@/predefined/ui/PokemonLiUI";
import { usePokedex } from "@/predefined/PokedexContext";

export default function PokedexPage() {
  const { pokedex, isLoading } = usePokedex();

  return (
    <PokemonGrid
      title="This is your Pokedex"
      isLoading={isLoading}
      isEmpty={!pokedex?.length}
    >
      {isLoading
        ? Array.from({ length: 20 }).map((_, index) => (
            <PokemonListItemUI key={index} />
          ))
        : pokedex?.map((pokemon) => (
            <PokemonListItemClient key={pokemon} name={pokemon} />
          ))}
    </PokemonGrid>
  );
}
