"use client";
import Image from "next/image";
import { Flex, styled } from "../../styled-system/jsx";
import { Text } from "../../styled-system/jsx/text";
import { Button } from "./Button";
import { useState } from "react";

export default function PokeballCounter() {
  const [count, setCount] = useState(10);
  return (
    <Flex
      direction="column"
      borderRadius="lg"
      p="lg"
      gap="lg"
      bg="surface.s1"
      align="center"
    >
      <styled.h2 fontSize="2xl">Pokeball Counter</styled.h2>
      <Image
        src="/logo.png"
        alt="Pokeball"
        width={256}
        height={256}
        onClick={() => setCount((x) => x + 1)}
        style={{ cursor: "pointer", minWidth: 256, userSelect: "none" }}
      />
      <Flex gap="lg" alignItems="center" justify="center">
        <Text fontSize="2xl">{count}</Text>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </Flex>
    </Flex>
  );
}
