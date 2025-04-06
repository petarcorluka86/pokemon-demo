import { Pokemon } from "@/utils/interface";
import { Box, Divider, Flex, styled } from "../../styled-system/jsx";
import Image from "next/image";
import { ReactNode } from "react";
import { Text } from "../../styled-system/jsx/text";
import { Button } from "./Button";
import PokedexButton from "./PokedexButton";

const NameValue = ({
  name,
  value,
}: {
  name: string;
  value: string | ReactNode;
}) => {
  return (
    <Flex justify="space-between">
      <Text textTransform="capitalize">{name}:</Text>
      <Text>{value}</Text>
    </Flex>
  );
};

const Details = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Flex
      w={{ mdDown: "100%", md: 400 }}
      p="lg"
      borderRadius="lg"
      bg="surface.s1"
      flexDirection="column"
      gap="lg"
    >
      <Text textAlign="center" fontSize="xl">
        Details
      </Text>

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
  );
};

const Moves = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Flex
      w={{ mdDown: "100%", md: 800 }}
      p="lg"
      borderRadius="lg"
      bg="surface.s1"
      flexDirection="column"
      gap="lg"
    >
      <Text textAlign="center" fontSize="xl">
        Moves
      </Text>
      <Flex wrap="wrap" gap="sm" justifyContent="center">
        {pokemon.moves.map((move) => (
          <Button variant="outline" size="tertiary" key={move.move.name}>
            {move.move.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Box p="lg">
      <Flex justifyContent="space-between" alignItems="center" mb="sm" gap="sm">
        <styled.h1
          textAlign="center"
          fontSize={{ base: "xl", md: "3xl" }}
          textTransform="uppercase"
        >
          #{pokemon.name}
        </styled.h1>
        <PokedexButton pokemonName={pokemon.name} />
      </Flex>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        gap="lg"
      >
        <Flex
          flexDirection={{ base: "row", md: "column" }}
          bg="surface.s1"
          p="lg"
          borderRadius="lg"
          justify="space-evenly"
          w={{ base: "100%", md: "auto" }}
        >
          <Box>
            <Text textAlign="center" fontSize="xl">
              Front
            </Text>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </Box>
          <Box>
            <Text textAlign="center" fontSize="xl">
              Back
            </Text>
            <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </Box>
        </Flex>
        <Details pokemon={pokemon} />
        <Moves pokemon={pokemon} />
      </Flex>
    </Box>
  );
}
