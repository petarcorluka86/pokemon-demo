"use client"; // Error boundaries must be Client Components

import { Button } from "@/predefined/ui/Button";
import { useEffect } from "react";
import { Flex, styled } from "../../../../styled-system/jsx";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Flex flexDirection="column" gap="xl" p="lg" alignItems="center">
      <styled.h2 fontSize="xl" textAlign="center">
        Something is wrong.
        <br />
        We couldn&apos;t fetch data for this pokemon.
      </styled.h2>
      <Button bg="status.error.default" onClick={() => reset()}>
        Try again
      </Button>
    </Flex>
  );
}
