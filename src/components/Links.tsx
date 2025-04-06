import Link from "next/link";
import { Flex } from "../../styled-system/jsx";
import { Button } from "./Button";

export default function Links() {
  return (
    <Flex flexDirection="column" gap="sm" hideBelow="md" mt="sm">
      <Link href="https://nextjs.org/docs" target="_blank">
        <Button variant="outline" w="100%">
          Next.js Docs
        </Button>
      </Link>
      <Link href="https://pokeapi.co/" target="_blank">
        <Button variant="outline" w="100%">
          Poke API
        </Button>
      </Link>
      <Link
        href="https://www.figma.com/design/PiseIcKWpJ9FReLM4cNtYb/Pokemon-Homework?node-id=0-1&p=f&t=YMzaVdQ0YOpsOY9Z-0"
        target="_blank"
      >
        <Button variant="outline" w="100%">
          Design
        </Button>
      </Link>
    </Flex>
  );
}
