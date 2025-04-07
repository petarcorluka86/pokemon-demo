import Image from "next/image";
import { Flex } from "../../styled-system/jsx";

/**
 * Loader is a presentational component.
 * It is used to render a loading spinner in the UI.
 *
 * @returns {React.ReactNode} The component's JSX.
 */
export default function Loader({
  size = 100,
  spin = true,
}: {
  size?: number;
  spin?: boolean;
}) {
  return (
    <Flex display="flex" justifyContent="center" alignItems="center">
      <div className={spin ? "rotate" : ""}>
        <Image src="/logo.png" alt="Loading" width={size} height={size} />
      </div>
    </Flex>
  );
}
