import PokemonDetails from "@/components/PokemonDetails";
import { fetchPokemon } from "@/utils/api";
import { Box, styled } from "../../../../styled-system/jsx";
import { Text } from "../../../../styled-system/jsx/text";
export default async function Pokemon({
  params,
}: {
  params: Promise<{ pokemonName: string }>;
}) {
  const { pokemonName } = await params;
  const pokemon = await fetchPokemon(pokemonName);

  if (!pokemon) {
    return (
      <Box>
        <styled.h1 textAlign="center" fontSize="3xl" textTransform="uppercase">
          {pokemonName}
        </styled.h1>
        <Text textAlign="center" fontSize="xl">
          Pokemon not found.
        </Text>
      </Box>
    );
  }

  console.log(pokemon);

  return <PokemonDetails pokemon={pokemon} />;
}
