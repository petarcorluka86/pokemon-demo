import { Pokemon } from "@/predefined/interface";
import { Box, Divider, Flex, styled } from "../../../styled-system/jsx";
import Image from "next/image";
import { ReactNode } from "react";

import { Button } from "./Button";

const NameValue = ({
  name,
  value,
}: {
  name: string;
  value: string | ReactNode;
}) => {
  return (
    <Flex justify="space-between">
      <styled.span textTransform="capitalize">{name}:</styled.span>
      <styled.span>{value}</styled.span>
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
      <styled.span textAlign="center" fontSize="xl">
        Details
      </styled.span>

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
      <styled.span textAlign="center" fontSize="xl">
        Moves
      </styled.span>
      <Flex wrap="wrap" gap="sm" justifyContent="center">
        {pokemon.moves.slice(0, 70).map((move) => (
          <Button variant="outline" size="tertiary" key={move.move.name}>
            {move.move.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default function PokemonDetails({
  pokemon,
  topRightAction,
}: {
  pokemon: Pokemon;
  topRightAction?: ReactNode;
}) {
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
        {topRightAction}
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
            <styled.span textAlign="center" fontSize="xl">
              Front
            </styled.span>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </Box>
          <Box>
            <styled.span textAlign="center" fontSize="xl">
              Back
            </styled.span>
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
