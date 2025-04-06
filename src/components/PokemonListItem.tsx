import Image from "next/image";
import { Flex } from "../../styled-system/jsx";
import { PokemonListItem as PokemonListItemType } from "@/utils/interface";
import { Text } from "../../styled-system/jsx/text";
import { fetchPokemon } from "@/utils/api";

export default async function PokemonListItem({
  name,
  url,
}: PokemonListItemType) {
  const pokemon = await fetchPokemon(url);
  return (
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
  );
}
