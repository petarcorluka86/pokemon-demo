# Next.js Project Guide

## Installation

- Run: `npx create-next-app@latest`
- For detailed instructions, visit the [official documentation](https://nextjs.org/docs/app/getting-started/installation)

## Project Overview

- **Initial Cleanup**: Remove unused files and update some like `favicon.ico`
- **Project Structure**: Checkout the [recommended structure](https://nextjs.org/docs/app/getting-started/project-structure)
- **Data Source**: [PokéAPI](https://pokeapi.co/)

## Routing

We need to implement the following pages:

- About page
- Pokémon list page
- Individual Pokémon details page

## Layout and Navigation

- Create a shared layout for all pages
- Implement a navigation component within the layout
  - Link component
  - About and pokemons list (specific pokemons page later)

## Design system

- install panda css: https://panda-css.com/docs/installation/nextjs#install-panda-css
- update panda.config.ts
- use it to make prettier navigation
  - use Image component for logo
  - usePathname hook to determine active route

## More layout and content management

- Add Container
- Add About text
- Add PokeballCounter

# Notes:

- pokazi url strukturu odredenu folderima
- pokazi grupiranje ruta u zajednicki layout pomocu zagrada
- pokazi navigaciju putem link komponente
- pokazi server i client komponente
- pokazi citanje dinamickih parametara
- pokazi loading na primjeru liste => skeleton (koristi block thread)
- pokazi koliko znaci ako je i skeleton tezak
- pokazi na primjeru pojedine kartice Suspense
- pokazi error handling na pokemon detaljima
- pokazi fetchanje na klijentu i serveru
