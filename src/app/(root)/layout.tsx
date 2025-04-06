import { Flex, styled } from "../../../styled-system/jsx";
import PokeballCounter from "@/components/PokeballCounter";
import Links from "@/components/Links";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex gap="lg" p="lg" direction={{ base: "column-reverse", md: "row" }}>
      <styled.main flex={1}>{children}</styled.main>
      <styled.aside w={{ base: "100%", md: 308 }}>
        <PokeballCounter />
        <Links />
      </styled.aside>
    </Flex>
  );
}
