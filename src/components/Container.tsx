import { PropsWithChildren } from "react";
import { Box } from "../../styled-system/jsx";

export default function Container({ children }: PropsWithChildren) {
  return (
    <Box maxW="1440px" mx="auto">
      {children}
    </Box>
  );
}
