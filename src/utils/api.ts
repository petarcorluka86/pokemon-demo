// import { blockThread } from "@/predefined/utils";
import { Pokemon, PokemonListResponse } from "../predefined/interface";

export const fetchPokemons = async () => {
  try {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40";
    const response = await fetch(URL);
    if (response.status === 200) {
      const data: PokemonListResponse = await response.json();
      // await blockThread(200);
      return data;
    } else {
      throw new Error("Failed to fetch pokemons");
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemon = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (response.status === 200) {
      const data: Pokemon = await response.json();
      // await blockThread(Math.random() * 3000);
      return data;
    } else {
      throw new Error("Failed to fetch pokemon");
    }
  } catch (error) {
    console.error(error);
  }
};
