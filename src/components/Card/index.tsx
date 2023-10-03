import {
    Action,
    CardActions,
    CardContainer,
    CardContent,
    CardImage,
    CardText,
    CardTextName,
    CardTextTypes
} from "./style";

import { IPokemon } from "../../interfaces/IPokemon";

import editIcon from "../../assets/Icon-edit.png"
import deleteIcon from "../../assets/Icon-trash.png"

interface ICardProps {
    handlerChangeModalState: (isOpen: boolean) => void,
    pokemon: IPokemon,
    handlerChangePanelState: (isOpen: boolean, mode: string) => void,
    handleSearchPokemonById: (pokemon: IPokemon) => void
}

export function Card({
    handlerChangeModalState,
    handlerChangePanelState,
    pokemon,
    handleSearchPokemonById
}: ICardProps) {

    function handleEditSelectedPokemon() {
        handlerChangePanelState(true, 'edit')
        handleSearchPokemonById(pokemon)
    }

    function handleDeleteSelectedPokemon() {
        handlerChangeModalState(true);
        handleSearchPokemonById(pokemon)
    }

    return (
        <CardContainer>
            <CardContent>
                <CardImage>
                    <div>
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                </CardImage>
                <CardText>
                    <CardTextName>
                        {
                            pokemon.name
                        }
                    </CardTextName>
                    <CardTextTypes>
                        {
                            pokemon.types.map(type => {
                                return <div key={type.type.name}>{type.type.name}</div>
                            })
                        }
                    </CardTextTypes>
                </CardText>
            </CardContent>
            <CardActions>
                <Action onClick={handleDeleteSelectedPokemon}>
                    <img src={deleteIcon} alt="" />
                    Excluir
                </Action>
                <Action onClick={handleEditSelectedPokemon}>
                    <img src={editIcon} alt="" />
                    Editar
                </Action>
            </CardActions>
        </CardContainer>
    )
}