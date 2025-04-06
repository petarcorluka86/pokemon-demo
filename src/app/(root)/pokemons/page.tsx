import { fetchPokemons } from "@/utils/api";
import { Grid } from "../../../../styled-system/jsx";
import { PokemonListItemServer } from "@/components/PokemonLiServer";
import { blockThread } from "@/utils/other";

export default async function Pokemons() {
  const data = await fetchPokemons();
  await blockThread(200);

  return (
    <Grid
      gridTemplateColumns="repeat(auto-fill, minmax(140px, 1fr))"
      gap="lg"
      width="100%"
    >
      {data?.results.map((pokemonListItem) => (
        <PokemonListItemServer
          key={pokemonListItem.name}
          name={pokemonListItem.name}
        />
      ))}
    </Grid>
  );
}
