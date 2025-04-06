import PokemonDetails from "@/components/PokemonDetails";
import { fetchPokemon } from "@/utils/api";
export default async function Pokemon({
  params,
}: {
  params: Promise<{ pokemonName: string }>;
}) {
  const { pokemonName } = await params;
  const pokemon = await fetchPokemon(pokemonName);

  if (!pokemon) {
    throw new Error("Pokemon not found");
  }

  return <PokemonDetails pokemon={pokemon} />;
}
