import Image from "next/image";
import { Flex } from "../../styled-system/jsx";
import { Text } from "../../styled-system/jsx/text";
import { fetchPokemon } from "@/utils/api";
import Link from "next/link";

export default async function PokemonListItem({ name }: { name: string }) {
  const pokemon = await fetchPokemon(name);

  if (!pokemon) {
    return null;
  }

  return (
    <Link href={`/pokemons/${name}`}>
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
          {name}
        </Text>
      </Flex>
    </Link>
  );
}
