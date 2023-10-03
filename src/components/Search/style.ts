import styled from "styled-components";
import bgImage2x from "../../assets/fundo-busca@2x.png";
import bgImage from "../../assets/fundo-busca.png";

export const SearchContainer = styled.div`
    background-image: url(${bgImage2x});

    @media screen and (max-width: 1200px) {
        background-image: url(${bgImage});
    }
    
    background-position: center;

    height: 260px;
    width: 100%;

    padding: 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchBar = styled.div`
    background-color: white;
    
    max-width: 1080px;
    width: 100%;
    height: 75px;

    margin-top: 40px;
    padding: 0 28px;
    border-radius: 8px;

    display: flex;
    align-items: center;

    &>img {
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        padding: 0 10px;

        &>img {
            width: 30px;
            height: 30px;
        }
    }
`

export const Input = styled.input`
    flex: 1;
    height: 100%;

    border: none;

    font-size: 24px;

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`