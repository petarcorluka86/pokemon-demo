import { fetchPokemon } from "@/utils/api";
import { PokemonListItemUI } from "../predefined/ui/PokemonLiUI";
import PokedexButton from "./PokedexButton";

export async function PokemonListItemServer({ name }: { name: string }) {
  const pokemon = await fetchPokemon(name);

  if (!pokemon) {
    return null;
  }

  return (
    <PokemonListItemUI
      pokemon={pokemon}
      topRightAction={
        <PokedexButton pokemonName={pokemon?.name || ""} compact />
      }
    />
  );
}
