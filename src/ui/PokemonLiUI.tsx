import { Box, Flex, styled } from "../../styled-system/jsx";
import Link from "next/link";
import { Pokemon } from "@/utils/interface";
import Image from "next/image";
import PokeballSVG from "./PokeballSVG";
import PokedexButton from "../components/PokedexButton";

/**
 * PokemonListItemUI is a presentational component.
 * It is used to render a Pokemon list item in the UI.
 *
 * @returns {React.ReactNode} The component's JSX.
 */
export const PokemonListItemUI = ({ pokemon }: { pokemon?: Pokemon }) => {
  const content = (
    <Flex
      pos="relative"
      flexDirection="column"
      gap="lg"
      bg="surface.s1"
      borderRadius="lg"
      alignItems="center"
      p="lg"
    >
      {pokemon && (
        <Box pos="absolute" top="0" right="0">
          <PokedexButton pokemonName={pokemon?.name || ""} compact />
        </Box>
      )}
      {pokemon ? (
        <>
          <Image
            src={pokemon?.sprites.front_default || "/logo.png"}
            alt={pokemon?.name || "loader"}
            width={100}
            height={100}
          />
        </>
      ) : (
        <Box p="sm">
          <PokeballSVG />
        </Box>
      )}
      <styled.span textAlign="center" textTransform="uppercase">
        {pokemon?.name || "Loading..."}
      </styled.span>
    </Flex>
  );

  if (pokemon) {
    return <Link href={`/pokemons/${pokemon.name}`}>{content}</Link>;
  }

  return content;
};
