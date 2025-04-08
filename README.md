# Pokemon app demo

You can find deployed version of finished app on ([Vercel](https://pokemon-demo-alpha.vercel.app/)).

## Initial project setup

1. Run `npx create-next-app@latest` to create "pokemon-app" ([read more](https://nextjs.org/docs/app/getting-started/installation))
2. Run `npm run dev` and make project overview
3. Clean `public` folder and add `logo.png`
4. Replace `favicon.ico`
5. Delete unnecessary content
6. Add `predefined` folder to `src` and replace `global.css` import
7. Run `npm install -D @pandacss/dev` and `npx panda init --postcss` ([read more](https://panda-css.com/docs/installation/nextjs#install-panda-css))
8. Add `"panda": "panda codegen"` to scripts

## Root layout

```tsx
import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "../predefined/globals.css";
import Container from "@/predefined/ui/Container";
import Header from "@/predefined/ui/Header";
import { styled } from "../../styled-system/jsx";

const font = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon app",
  description: "Sofascore Academy 2025 - demo app",
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
        <Header />
        <Container>{children}</Container>
      </styled.body>
    </html>
  );
}
```

9. Use `Bubblegum_Sans` font ([read more](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts))
10. Update `metadata` ([read more](https://nextjs.org/docs/app/building-your-application/optimizing/metadata))
11. Set minimal height on body and `surface.s0` background
12. Add `Header` and wrap `children` in `Container`
13. Inspect and test `Header` component
14. Explain client and server components ([read more](https://nextjs.org/learn/react-foundations/server-and-client-components), [read even more](https://nextjs.org/docs/app/building-your-application/rendering))

## Basic routing and grouped routes

15. Explain app router ([read more](https://nextjs.org/docs/app/building-your-application/routing))
16. Add "About", "Inventory" and "Pokedex" pages
17. Add `AboutPokemons` to About page
18. Group `(root)` pages ([read more](https://nextjs.org/docs/app/building-your-application/routing/route-groups))
19. Add nested layout for `(root)` pages ([read more](https://nextjs.org/docs/app/getting-started/layouts-and-pages))

```tsx
import { Flex, styled } from "../../../styled-system/jsx";
import Links from "@/predefined/ui/Links";
import PokeballCounterUI from "@/predefined/ui/PokeballCounterUI";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <Flex gap="lg" p="lg" direction={{ base: "column-reverse", md: "row" }}>
      <styled.main flex={1}>{children}</styled.main>
      <styled.aside w={{ base: "100%", md: 308 }}>
        <PokeballCounterUI count={count} setCount={setCount} />
        <Links />
      </styled.aside>
    </Flex>
  );
}
```

20. Fix "hook on server" problem by extracting code to `PokeballCounter` client component
21. Inspect `PokeballCounter` component state while navigating `(root)` pages

## Server data Fetching and image access

22. Add `utils/api.ts` to demonstrate server-side pokemons list fetch in an asynchronous React Server Component.

```ts
// import { blockThread } from "@/predefined/utils";
import { Pokemon, PokemonListResponse } from "../predefined/interface";

export const fetchPokemons = async () => {
  try {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40";
    const response = await fetch(URL);
    if (response.status === 200) {
      const data: PokemonListResponse = await response.json();
      // await blockThread(200);
      return data;
    } else {
      throw new Error("Failed to fetch pokemons");
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemon = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (response.status === 200) {
      const data: Pokemon = await response.json();
      // await blockThread(Math.random() * 3000);
      return data;
    } else {
      throw new Error("Failed to fetch pokemon");
    }
  } catch (error) {
    console.error(error);
  }
};
```

23. Fetch pokemons and render it inside `PokemonGrid` component
24. Create `PokemonLiServer` component which fetches and renders pokemon card on server
25. Explain `images.remotePatterns` configuration ([read more](https://nextjs.org/docs/pages/building-your-application/optimizing/images))

```ts
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
```

## Nested routing and dynamic params

26. Add nested route `/pokemons/[pokemonName]`
27. Demonstrate params usage ([read more](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes))
28. Fetch pokemon and render `PokemonDetails`
29. Take out specific pokemon page from root pages layout

## Client fetching

30. Wrap the app in `PokedexContextProvider` and explain `PokedexContext`
31. Create `PokemonLiClient` component which fetches and renders pokemon card on client
32. Create `PokedexButton` component to add or remove pokemon from pokedex
33. Add `PokedexButton` to `PokemonLiClient`, `PokemonLiServer` and `PokemonDetails`

## Top level error handling

34. Demonstrate usage of `error.tsx` file
35. Demonstrate usage of `notFound` function by creating `not-found` file ([read more](https://nextjs.org/docs/app/api-reference/functions/not-found))

## Loading and Suspense

36. Block thread when fetching pokemons to demonstrate inventory page loading time
37. Demonstrate usage of `loading.tsx` file
38. Demonstrate usage of `Suspense` by blocking `fetchPokemon` function and wrapping `PokemonLiServer` in `Suspense`
39. Demonstrate importance of `loading.tsx` file weight by using simple card placeholder

```tsx
<Box h={172} bg="surface.s1" borderRadius="lg" key={index} />
```

# More

## [Hydration explained](Hydration.md)

## [Server and Client components diff](ServerClientComponents.md)

## [Rendering strategies](RenderingCheatsheet.md)
