import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { Flex, styled } from "../../styled-system/jsx";
import PokeballCounter from "@/components/PokeballCounter";
import Link from "next/link";
import { Button } from "@/components/Button";

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
          <Flex minH="100vh" gap="lg" p="lg">
            <styled.main flex={1}>{children}</styled.main>
            <styled.aside
              w={308}
              hideBelow="md"
              display="flex"
              flexDirection="column"
              gap="sm"
            >
              <PokeballCounter />
              <Link href="https://nextjs.org/docs" target="_blank">
                <Button variant="outline" w="100%">
                  Next.js Docs
                </Button>
              </Link>
              <Link href="https://pokeapi.co/" target="_blank">
                <Button variant="outline" w="100%">
                  Poke API
                </Button>
              </Link>
              <Link
                href="https://www.figma.com/design/PiseIcKWpJ9FReLM4cNtYb/Pokemon-Homework?node-id=0-1&p=f&t=YMzaVdQ0YOpsOY9Z-0"
                target="_blank"
              >
                <Button variant="outline" w="100%">
                  Design
                </Button>
              </Link>
            </styled.aside>
          </Flex>
        </Container>
      </styled.body>
    </html>
  );
}
