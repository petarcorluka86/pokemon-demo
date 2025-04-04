import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className={font.className}>
        <nav>
          <Link href="/">About</Link>
          <Link href="/pokemons">Pokemons</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
