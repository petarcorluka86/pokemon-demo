import { Flex } from "../../../styled-system/jsx";
import { Button } from "./Button";

export default function PokedexButtonUI({
  isInPokedex,
  compact,
  handleClick,
}: {
  isInPokedex: boolean;
  compact: boolean;
  handleClick: () => void;
}) {
  if (compact) {
    return (
      <Flex
        p="sm"
        justifyContent="center"
        alignItems="center"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick();
        }}
      >
        {isInPokedex === undefined ? null : isInPokedex ? "✅" : "☑️"}
      </Flex>
    );
  }

  return (
    <Button variant="outline" size="tertiary" onClick={handleClick}>
      {isInPokedex === undefined
        ? "Loading..."
        : isInPokedex
          ? "Remove from Pokedex"
          : "Add to Pokedex"}
    </Button>
  );
}
