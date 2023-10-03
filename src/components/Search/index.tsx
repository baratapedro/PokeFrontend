import { useState, KeyboardEvent } from "react";

import { Input, SearchBar, SearchContainer } from "./style";

import lupa from '../../assets/lupa.png'

interface ISearchProps {
    handlerSearchPokemon: (pokemon: string) => void
}

export function Search({handlerSearchPokemon}: ISearchProps) {

    const [search, setSearch] = useState('');

    function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            handlerSearchPokemon(search.toLowerCase())
        }
    }

    return (
        <SearchContainer>
            <SearchBar>
                <Input 
                    type="text" 
                    placeholder="Digite aqui sua busca..." 
                    onChange={(e) =>  setSearch(e.target.value)} 
                    onKeyDown={(e) => handleKeyPress(e)}
                />
                <img src={lupa} alt="" onClick={() => handlerSearchPokemon(search)}/>
            </SearchBar>
        </SearchContainer>
    )
}