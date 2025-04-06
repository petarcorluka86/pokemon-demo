import Image from "next/image";
import { styled } from "../../styled-system/jsx";

export default function Loader() {
  return (
    <styled.div display="flex" justifyContent="center">
      <div className="rotate">
        <Image src="/logo.png" alt="Loading" width={100} height={100} />
      </div>
    </styled.div>
  );
}
