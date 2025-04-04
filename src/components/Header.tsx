"use client";
import Link from "next/link";
import { styled } from "../../styled-system/jsx";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const StyledLink = styled(Link, {
  base: {
    textUnderlineOffset: 8,
  },
});

export default function Header() {
  const pathname = usePathname();
  return (
    <styled.header
      position="sticky"
      top={0}
      zIndex="1"
      bg="header.primary"
      p="lg"
      display="flex"
    >
      <styled.nav
        display="flex"
        gap="lg"
        color="onColor.primary"
        alignItems="center"
        fontSize="xl"
      >
        <Link href="/">
          <Image src={Logo} alt="Pokemon" width={40} height={40} />
        </Link>
        <StyledLink
          href="/"
          textDecoration={pathname === "/" ? "underline" : "none"}
        >
          About
        </StyledLink>
        <StyledLink
          href="/pokemons"
          textDecoration={pathname === "/pokemons" ? "underline" : "none"}
        >
          Pokemons
        </StyledLink>
      </styled.nav>
    </styled.header>
  );
}
