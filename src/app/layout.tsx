import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { Flex, styled } from "../../styled-system/jsx";
import PokeballCounter from "@/components/PokeballCounter";
import Links from "@/components/Links";

const font = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon Demo",
  description: "Sofascore Academy 2025 Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <styled.body bg="surface.s0" className={font.className}>
        <Header />
        <Container>
          <Flex
            minH="100vh"
            gap="lg"
            p="lg"
            direction={{ base: "column-reverse", md: "row" }}
          >
            <styled.main flex={1}>{children}</styled.main>
            <styled.aside w={{ base: "100%", md: 308 }}>
              <PokeballCounter />
              <Links />
            </styled.aside>
          </Flex>
        </Container>
      </styled.body>
    </html>
  );
}
