import Image from "next/image";
import { Box, Flex, styled } from "../../styled-system/jsx";
import { Button } from "../ui/Button";

export default function PokeballCounterUI({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Flex
      direction={{ base: "row", md: "column" }}
      borderRadius="lg"
      p="lg"
      gap="lg"
      bg="surface.s1"
      align="center"
      justifyContent={{ base: "space-between", md: "center" }}
    >
      <styled.h2 fontSize="2xl" hideBelow="md">
        Pokeball Counter
      </styled.h2>
      <Box
        w={{ base: 48, md: 256 }}
        cursor="pointer"
        userSelect="none"
        onClick={() => setCount((x) => x + 1)}
      >
        <Image
          src="/logo.png"
          alt="Pokeball"
          width={256}
          height={256}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Flex gap="lg" alignItems="center" justify="center">
        <styled.span fontSize="2xl">{count}</styled.span>
        <Button size="tertiary" onClick={() => setCount(0)}>
          Reset
        </Button>
      </Flex>
    </Flex>
  );
}
