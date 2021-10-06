export interface PokemonList {
    count: number,
    previous: string,
    next: string,
    results: Array<Pokemon>
}

export interface Pokemon {
    name: string,
    height: number,
    weight: number,
    imageUrl: string,
    abilities: string
}
