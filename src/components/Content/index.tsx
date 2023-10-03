import { Card } from "../Card";

import {
    Cards,
    ContentContainer,
    ContentHeader,
    ContentTitle,
    NewCardButton,
    NotFoundMessage
} from "./style";

import { IPokemon } from "../../interfaces/IPokemon";

interface IContentProps {
    handlerChangePanelState: (isOpen: boolean, mode: string) => void,
    handlerChangeModalState: (isOpen: boolean) => void,
    pokemons: IPokemon[],
    handleSearchPokemonById: (pokemon: IPokemon) => void
}


export function Content({
    handlerChangePanelState,
    handlerChangeModalState,
    pokemons,
    handleSearchPokemonById
}: IContentProps) {

    return (
        <ContentContainer>
            <ContentHeader>
                <ContentTitle>Resultado da busca</ContentTitle>
                <NewCardButton onClick={() => handlerChangePanelState(true, 'create')}>Novo card</NewCardButton>
            </ContentHeader>
            {
                pokemons.length > 0 ? (
                    <Cards>
                        {
                            pokemons.map(pokemon => {
                                return <Card
                                    handlerChangeModalState={handlerChangeModalState}
                                    handlerChangePanelState={handlerChangePanelState}
                                    key={pokemon.id} pokemon={pokemon}
                                    handleSearchPokemonById={handleSearchPokemonById}
                                />
                            })
                        }
                    </Cards>
                ) : (
                    <NotFoundMessage>Pokémon não encontrado</NotFoundMessage>
                )
            }

        </ContentContainer>
    )
}