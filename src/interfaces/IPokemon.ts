export interface IPokemon {
    id: number,
    name: string,
    sprites: {
        front_default: string
    },
    types: {
        type: {
            name: string
        }
    }[]
}