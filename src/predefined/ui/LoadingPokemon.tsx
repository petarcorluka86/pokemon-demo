import { Box, styled } from "../../../styled-system/jsx";
import Loader from "./Loader";

export default function LoadingPokemon() {
  return (
    <Box p="lg">
      <styled.h1
        fontSize={{ base: "xl", md: "3xl" }}
        textTransform="uppercase"
        mb="4xl"
      >
        Loading pokemon...
      </styled.h1>
      <Loader />
    </Box>
  );
}
