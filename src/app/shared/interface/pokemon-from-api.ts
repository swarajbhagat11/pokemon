export interface PokemonFromAPI {
    height: number,
    weight: number,
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    },
    abilities: Array<{
        ability: {
            name: string
        }
    }>
}