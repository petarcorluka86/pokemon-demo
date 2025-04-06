"use client";
import Link from "next/link";
import { styled } from "../../styled-system/jsx";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";

const StyledLink = styled(Link, {
  base: {
    textUnderlineOffset: 8,
  },
});

export default function Header() {
  const pathname = usePathname();
  return (
    <styled.header position="sticky" top={0} zIndex="1" bg="header.primary">
      <Container>
        <styled.nav
          display="flex"
          p="lg"
          gap="lg"
          color="onColor.primary"
          alignItems="center"
          fontSize="xl"
        >
          <StyledLink href="/" display="flex" gap="sm" alignItems="center">
            <Image src={Logo} alt="Pokemon" width={40} height={40} />
          </StyledLink>
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
            List
          </StyledLink>
        </styled.nav>
      </Container>
    </styled.header>
  );
}
