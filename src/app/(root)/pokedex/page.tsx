"use client";

import { PokemonListItemClient } from "@/components/PokemonLiClient";
import { readFromStorage } from "@/utils/storage";
import { useEffect, useState } from "react";
import { Box, Grid, styled } from "../../../../styled-system/jsx";
import { Text } from "../../../../styled-system/jsx/text";
import Loader from "@/components/Loader";

export default function PokedexPage() {
  const [pokemons, setPokemons] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    setPokemons(readFromStorage<string[]>("pokedex", []));
  }, []);

  return (
    <Box>
      <styled.h1 fontSize="2xl" mb="sm">
        This is your Pokedex
      </styled.h1>
      {pokemons === undefined ? (
        <Loader />
      ) : pokemons.length === 0 ? (
        <Text>No pokemons in your Pokedex</Text>
      ) : (
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(140px, 1fr))"
          gap="lg"
          width="100%"
        >
          {pokemons.map((pokemon) => (
            <PokemonListItemClient key={pokemon} name={pokemon} />
          ))}
        </Grid>
      )}
    </Box>
  );
}
