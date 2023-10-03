import styled from "styled-components";

export const LoadMoreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 20px;
`

export const LoadMoreButton = styled.button`
    width: 167px;
    height: 48px;

    background-color: #E76316;
    color: white;

    border: 1px solid #E76316;
    border-radius: 8px;

    font-size: 18px;
    cursor: pointer;

    transition: all 0.3s ease; 

    &:hover {
        background: #d55113;
    }
`