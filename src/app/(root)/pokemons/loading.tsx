import { PokemonListItemUI } from "@/predefined/ui/PokemonLiUI";
import { Grid } from "../../../../styled-system/jsx";

export default function PokemonsSkeleton() {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fill, minmax(140px, 1fr))"
      gap="lg"
      width="100%"
    >
      {Array.from({ length: 40 }).map((_, index) => (
        <PokemonListItemUI key={index} />
      ))}
    </Grid>
  );
}
