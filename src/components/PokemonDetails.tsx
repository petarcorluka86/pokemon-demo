import { Pokemon } from "@/utils/interface";
import { Divider, Flex, styled } from "../../styled-system/jsx";
import Image from "next/image";
import { ReactNode } from "react";
import { Text } from "../../styled-system/jsx/text";

const NameValue = ({
  name,
  value,
}: {
  name: string;
  value: string | ReactNode;
}) => {
  return (
    <Flex justify="space-between">
      <Text>{name}:</Text>
      <Text>{value}</Text>
    </Flex>
  );
};

export default function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Flex flexDirection={{ base: "column" }} gap="lg">
      <styled.h1 textAlign="center" fontSize="3xl" textTransform="uppercase">
        # {pokemon.name}
      </styled.h1>
      <Flex
        p="lg"
        borderRadius="lg"
        bg="surface.s1"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "lg", md: "4xl" }}
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={100}
          height={100}
        />

        <Flex
          w={{ mdDown: "100%" }}
          maxW={400}
          flexDirection="column"
          gap="lg"
          flexGrow={1}
        >
          <NameValue name="Height" value={`${pokemon.height} cm`} />
          <NameValue name="Weight" value={`${pokemon.weight} kg`} />
          <Divider />
          {pokemon.stats.map((stat) => (
            <NameValue
              key={stat.stat.name}
              name={stat.stat.name}
              value={stat.base_stat}
            />
          ))}
        </Flex>
        <Image
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
          width={100}
          height={100}
        />
      </Flex>
    </Flex>
  );
}
