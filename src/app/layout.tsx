import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { styled } from "../../styled-system/jsx";

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
        <Container>{children}</Container>
      </styled.body>
    </html>
  );
}
