import styled from "styled-components"

export const CardContainer = styled.div`
    background-color: white;

    height: 267px;

    border-radius: 8px;
    border: 1px solid #E4E4E4;

    display: flex;
    flex-direction: column;
`

export const CardContent = styled.div`
    flex: 1;
    padding: 0 25px;
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const CardImage = styled.div`
    height: 140px;

    display: flex;
    align-items: center;
    justify-content: center;

    &>div {
        width: 95px;
        height: 95px;
        border-radius: 999px;

        background-color: #F6F4F6;
        border: 1px solid #E4E4E4;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const CardText = styled.div`
        flex: 1;
        max-width: 100%;
        
        border-top: 1px solid #F0EFF0;
        padding-top: 20px;
        margin-bottom: 20px;

        text-align: center;
        color: #263238;

        display: flex;
        flex-direction: column;
        gap: 5px;

`

export const CardActions = styled.div`
    height: 43px;
    box-shadow: inset 0px 3px 6px #0000000F;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    padding: 0 25px;
`

export const Action = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(38, 50, 56, .48);
    cursor: pointer;

    transition: all 0.3s ease; 

    &:hover {
        color: rgba(38, 50, 56, .68)
    }
`

export const CardTextName = styled.div`
    font-weight: bold;
`

export const CardTextTypes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    color: #757575;
`