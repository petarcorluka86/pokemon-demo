"use client";
import Image from "next/image";
import { Flex } from "../../styled-system/jsx";
import { Text } from "../../styled-system/jsx/text";
import { Button } from "./Button";
import { useState } from "react";

export default function PokeballCounter() {
  const [count, setCount] = useState(10);
  return (
    <Flex
      direction="column"
      border="2px solid {colors.primary.default}"
      borderRadius="lg"
      p="xl"
      gap="xl"
      bg="surface.s1"
    >
      <Image
        src="/logo.png"
        alt="Pokeball"
        width={256}
        height={256}
        onClick={() => setCount((x) => x + 1)}
        style={{ cursor: "pointer", minWidth: 256 }}
      />
      <Flex gap="xl" alignItems="center" justify="center">
        <Text fontSize="2xl">{count}</Text>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </Flex>
    </Flex>
  );
}
