import { Grid, styled } from "../../../styled-system/jsx";

import { Box } from "../../../styled-system/jsx";
import { PropsWithChildren } from "react";

export default function PokemonGrid({
  title,
  isLoading,
  isEmpty,
  children,
}: PropsWithChildren<{
  isLoading: boolean;
  isEmpty: boolean;
  title: string;
}>) {
  return (
    <Box>
      <styled.h1 fontSize="2xl" mb="sm">
        {title}
      </styled.h1>
      {isEmpty && !isLoading ? (
        <styled.span>No pokemons here.</styled.span>
      ) : (
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(140px, 1fr))"
          gap="lg"
          width="100%"
        >
          {children}
        </Grid>
      )}
    </Box>
  );
}
