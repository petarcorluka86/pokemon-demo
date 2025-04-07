"use client";

import { usePokedex } from "../predefined/PokedexContext";
import PokedexButtonUI from "@/predefined/ui/PokedexButtonUI";

export default function PokedexButton({
  pokemonName,
  compact = false,
}: {
  pokemonName: string;
  compact?: boolean;
}) {
  const { isPokemonInPokedex, addPokemon, removePokemon, isLoading } =
    usePokedex();
  const isInPokedex = isPokemonInPokedex(pokemonName);

  return (
    <PokedexButtonUI
      isInPokedex={isInPokedex}
      compact={compact}
      handleClick={() =>
        isLoading
          ? null
          : isInPokedex
            ? removePokemon(pokemonName)
            : addPokemon(pokemonName)
      }
    />
  );
}
