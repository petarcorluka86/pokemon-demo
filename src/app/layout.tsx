import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "../predefined/globals.css";
import Header from "@/predefined/ui/Header";
import Container from "@/predefined/ui/Container";
import { styled } from "../../styled-system/jsx";
import { PokedexProvider } from "@/predefined/PokedexContext";

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
      <styled.body
        bg="surface.s0"
        className={font.className}
        minH="calc(100vh + 1px)"
      >
        <PokedexProvider>
          <Header />
          <Container>{children}</Container>
        </PokedexProvider>
      </styled.body>
    </html>
  );
}
