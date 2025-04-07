import { styled } from "../../../styled-system/jsx";

import { Flex } from "../../../styled-system/jsx";
import { Button } from "./Button";

export default function Error({ reset }: { reset(): void }) {
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
