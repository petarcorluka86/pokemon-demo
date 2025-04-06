import { Pokemon, PokemonListResponse } from "./interface";

export const fetchPokemons = async () => {
  try {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40";
    const response = await fetch(URL);
    const data: PokemonListResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemon = async (url: string) => {
  try {
    const response = await fetch(url);
    const data: Pokemon = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
