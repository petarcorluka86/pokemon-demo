"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "./Button";
import { readFromStorage, writeToStorage } from "@/utils/storage";
import { Flex } from "../../styled-system/jsx";

export default function PokedexButton({
  pokemonName,
  compact = false,
}: {
  pokemonName: string;
  compact?: boolean;
}) {
  const [isInPokedex, setIsInPokedex] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const pokedex = readFromStorage<string[]>("pokedex", []);
    const isInPokedex = pokedex.includes(pokemonName);
    setIsInPokedex(isInPokedex);
  }, [pokemonName]);

  const handleClick = () => {
    if (isInPokedex === undefined) {
      return;
    }
    const pokedex = readFromStorage<string[]>("pokedex", []);
    if (isInPokedex) {
      const newPokedex = pokedex.filter((name) => name !== pokemonName);
      writeToStorage("pokedex", newPokedex);
    } else {
      pokedex.push(pokemonName);
      writeToStorage("pokedex", pokedex);
    }
    setIsInPokedex(!isInPokedex);
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
