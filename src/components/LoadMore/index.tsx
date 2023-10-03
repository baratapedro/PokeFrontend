import { LoadMoreButton, LoadMoreContainer } from "./style";

interface ILoadMoreProps {
    handleGetMorePokemons: () => void
}

export function LoadMore({handleGetMorePokemons}: ILoadMoreProps) {
    return (
        <LoadMoreContainer>
            <LoadMoreButton onClick={handleGetMorePokemons}>
                Carregar mais
            </LoadMoreButton>
        </LoadMoreContainer>
    )
}