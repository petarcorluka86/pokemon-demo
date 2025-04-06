export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonListItem[];
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    back_default: string;
  };
}
