"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { readFromStorage, writeToStorage } from "@/predefined/utils";

type PokedexContextType = {
  pokedex: string[];
  addPokemon: (name: string) => void;
  removePokemon: (name: string) => void;
  isPokemonInPokedex: (name: string) => boolean;
  isLoading: boolean;
};

const PokedexContext = createContext<PokedexContextType>({
  pokedex: [],
  addPokemon: () => {},
  removePokemon: () => {},
  isPokemonInPokedex: () => false,
  isLoading: true,
});

export const PokedexProvider = ({ children }: { children: ReactNode }) => {
  const [pokedex, setPokedex] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedPokedex = readFromStorage<string[]>("pokedex", []);
    setPokedex(storedPokedex);
    setIsLoading(false);
  }, []);

  const isPokemonInPokedex = (name: string) => {
    return pokedex.includes(name);
  };

  const addPokemon = (name: string) => {
    if (!isPokemonInPokedex(name)) {
      const updatedPokedex = [...pokedex, name];
      setPokedex(updatedPokedex);
      writeToStorage("pokedex", updatedPokedex);
    }
  };

  const removePokemon = (name: string) => {
    const updatedPokedex = pokedex.filter((pokemon) => pokemon !== name);
    setPokedex(updatedPokedex);
    writeToStorage("pokedex", updatedPokedex);
  };

  return (
    <PokedexContext.Provider
      value={{
        pokedex,
        addPokemon,
        removePokemon,
        isPokemonInPokedex,
        isLoading,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexContext;

export const usePokedex = () => useContext(PokedexContext);
