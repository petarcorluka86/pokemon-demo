"use client";
import { Button } from "./Button";
import { Flex } from "../../styled-system/jsx";
import { usePokedex } from "./PokedexContext";

export default function PokedexButton({
  pokemonName,
  compact = false,
}: {
  pokemonName: string;
  compact?: boolean;
}) {
  const { isPokemonInPokedex, addPokemon, removePokemon } = usePokedex();
  const isInPokedex = isPokemonInPokedex(pokemonName);

  const handleClick = () => {
    if (isInPokedex) {
      removePokemon(pokemonName);
    } else {
      addPokemon(pokemonName);
    }
  };

  if (compact) {
    return (
      <Flex
        p="sm"
        justifyContent="center"
        alignItems="center"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick();
        }}
      >
        {isInPokedex === undefined ? null : isInPokedex ? "✅" : "☑️"}
      </Flex>
    );
  }

  return (
    <Button variant="outline" size="tertiary" onClick={handleClick}>
      {isInPokedex === undefined
        ? "Loading..."
        : isInPokedex
          ? "Remove from Pokedex"
          : "Add to Pokedex"}
    </Button>
  );
}
