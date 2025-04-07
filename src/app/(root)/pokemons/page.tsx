import { fetchPokemons } from "@/utils/api";
import { Grid } from "../../../../styled-system/jsx";
import { PokemonListItemServer } from "@/components/PokemonLiServer";
import { Suspense } from "react";
import { PokemonListItemUI } from "@/ui/PokemonLiUI";

export default async function Pokemons() {
  const data = await fetchPokemons();

  return (
    <Grid
      gridTemplateColumns="repeat(auto-fill, minmax(140px, 1fr))"
      gap="lg"
      width="100%"
    >
      {data?.results.map((pokemonListItem) => (
        <Suspense key={pokemonListItem.name} fallback={<PokemonListItemUI />}>
          <PokemonListItemServer name={pokemonListItem.name} />
        </Suspense>
      ))}
    </Grid>
  );
}
