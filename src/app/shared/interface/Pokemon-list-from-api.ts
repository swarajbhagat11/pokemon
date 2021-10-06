export interface PokemonListFromAPI {
    count: number,
    previous: string,
    next: string,
    results: Array<PokemonAPIDetails>
}

export interface PokemonAPIDetails {
    name: string,
    url: string
}
