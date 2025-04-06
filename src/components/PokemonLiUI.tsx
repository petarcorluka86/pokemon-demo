import Image from "next/image";
import { Flex } from "../../styled-system/jsx";
import { Text } from "../../styled-system/jsx/text";
import Link from "next/link";
import { Pokemon } from "@/utils/interface";

export const PokemonListItemUI = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Link href={`/pokemons/${pokemon.name}`}>
      <Flex
        flexDirection="column"
        gap="lg"
        bg="surface.s1"
        borderRadius="lg"
        alignItems="center"
        p="lg"
      >
        <Image
          src={pokemon?.sprites.front_default || "/logo.png"}
          alt="Pokeball"
          width={100}
          height={100}
        />
        <Text textAlign="center" textTransform="uppercase">
          {pokemon.name}
        </Text>
      </Flex>
    </Link>
  );
};
