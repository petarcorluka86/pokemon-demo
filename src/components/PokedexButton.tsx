"use client";
import { usePokedex } from "./PokedexContext";
import PokedexButtonUI from "@/predefined/ui/PokedexButtonUI";

export default function PokedexButton({
  pokemonName,
  compact = false,
}: {
  pokemonName: string;
  compact?: boolean;
}) {
  const { isPokemonInPokedex, addPokemon, removePokemon } = usePokedex();
  const isInPokedex = isPokemonInPokedex(pokemonName);

  return (
    <PokedexButtonUI
      isInPokedex={isInPokedex}
      compact={compact}
      handleClick={() =>
        isInPokedex ? removePokemon(pokemonName) : addPokemon(pokemonName)
      }
    />
  );
}
