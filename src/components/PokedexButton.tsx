"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "./Button";
import { readFromStorage, writeToStorage } from "@/utils/storage";

export default function PokedexButton({
  pokemonName,
}: {
  pokemonName: string;
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
