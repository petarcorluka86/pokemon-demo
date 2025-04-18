"use client";

import { fetchPokemon } from "@/utils/api";
import { PokemonListItemUI } from "../predefined/ui/PokemonLiUI";
import { useEffect, useState } from "react";
import { Pokemon } from "@/predefined/interface";
import PokedexButton from "./PokedexButton";
export function PokemonListItemClient({ name }: { name: string }) {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  useEffect(() => {
    fetchPokemon(name).then((pokemon) => setPokemon(pokemon));
  }, [name]);

  return (
    <PokemonListItemUI
      pokemon={pokemon}
      topRightAction={
        <PokedexButton pokemonName={pokemon?.name || ""} compact />
      }
    />
  );
}
