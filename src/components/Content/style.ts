import styled from "styled-components";

export const ContentContainer = styled.div`
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;

    padding: 20px;

    min-height: calc(100vh - 400px);

    display: flex;
    flex-direction: column;
`

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;
`

export const ContentTitle = styled.h1`
    color: #5F1478;
    font-size: 32px;

    @media screen and (max-width: 550px) {
        font-size: 18px;
    }


    font-weight: 400;
`

export const NewCardButton = styled.button`
    width: 173px;
    height: 48px;

    background-color: #E76316;
    color: white;

    border: none;
    border-radius: 8px;

    font-size: 18px;
    cursor: pointer;

    transition: all 0.3s ease; 

    &:hover {
        background: #d55113;
    }

    @media screen and (max-width: 550px) {
        width: 108px;
        height: 40px;
        font-size: 15px;
    }
`
export const Cards = styled.div`

    grid-template-columns: repeat(4, 1fr); 

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr); 
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media screen and (max-width: 520px) {
        grid-template-columns: repeat(1, 1fr); 
    }

    max-width: 100%;

    display: grid;
    justify-content: space-between;
    grid-gap: 30px;
`

export const NotFoundMessage = styled.div`
    width: 100%;
    
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    color: #303030;
`