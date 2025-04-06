import Image from "next/image";
import { Flex } from "../../styled-system/jsx";

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
