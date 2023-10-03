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
import { LoadSpinner } from "../LoadingSpinner";

interface IContentProps {
    handlerChangePanelState: (isOpen: boolean, mode: string) => void,
    handlerChangeModalState: (isOpen: boolean) => void,
    pokemons: IPokemon[],
    handleSetPokemonFind: (pokemon: IPokemon) => void,
    isLoading: boolean
}


export function Content({
    handlerChangePanelState,
    handlerChangeModalState,
    pokemons,
    handleSetPokemonFind,
    isLoading
}: IContentProps) {
    return (
        <ContentContainer>
            <ContentHeader>
                <ContentTitle>Resultado da busca</ContentTitle>
                <NewCardButton onClick={() => handlerChangePanelState(true, 'create')}>Novo card</NewCardButton>
            </ContentHeader>
            {
                isLoading ?
                    <LoadSpinner />
                    :
                    (
                        pokemons.length > 0 ? (
                            <>
                                <Cards>
                                    {
                                        pokemons.map(pokemon => {
                                            return <Card
                                                handlerChangeModalState={handlerChangeModalState}
                                                handlerChangePanelState={handlerChangePanelState}
                                                key={pokemon.id} pokemon={pokemon}
                                                handleSetPokemonFind={handleSetPokemonFind}
                                            />
                                        })
                                    }
                                </Cards>
                            </>
                        ) : (

                            <NotFoundMessage>Pokémon não encontrado</NotFoundMessage>
                        )
                    )
            }

        </ContentContainer>
    )
}