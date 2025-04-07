import { PropsWithChildren } from "react";
import { Box } from "../../styled-system/jsx";

/**
 * Container is a presentational component.
 * It is used to contain the content in the center of the page.
 *
 * @returns {React.ReactNode} The component's JSX.
 */
export default function Container({ children }: PropsWithChildren) {
  return (
    <Box maxW="1240px" mx="auto">
      {children}
    </Box>
  );
}
