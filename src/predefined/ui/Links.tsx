import Link from "next/link";
import { Flex } from "../../../styled-system/jsx";
import { Button } from "./Button";

/**
 * Links is a presentational component.
 * It is used to render a list of links in the UI.
 *
 * @returns {React.ReactNode} The component's JSX.
 */
export default function Links() {
  return (
    <Flex gap="xs" hideBelow="md" mt="lg" justify="space-evenly">
      <Link href="https://nextjs.org/docs" target="_blank">
        <Button variant="clear" size="tertiary">
          Next.js
        </Button>
      </Link>
      <Link href="https://pokeapi.co/" target="_blank">
        <Button variant="clear" size="tertiary">
          Poke API
        </Button>
      </Link>
      <Link
        href="https://www.figma.com/design/PiseIcKWpJ9FReLM4cNtYb/Pokemon-Homework?node-id=0-1&p=f&t=YMzaVdQ0YOpsOY9Z-0"
        target="_blank"
      >
        <Button variant="clear" size="tertiary">
          Figma
        </Button>
      </Link>
    </Flex>
  );
}
