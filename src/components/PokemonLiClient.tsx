"use client";
import { fetchPokemon } from "@/utils/api";

import { PokemonListItemUI } from "../ui/PokemonLiUI";
import { useEffect, useState } from "react";
import { Pokemon } from "@/utils/interface";

export function PokemonListItemClient({ name }: { name: string }) {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  useEffect(() => {
    fetchPokemon(name).then((pokemon) => setPokemon(pokemon));
  }, [name]);

  return <PokemonListItemUI pokemon={pokemon} />;
}
