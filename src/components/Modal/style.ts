import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-color: rgba(0,0,0,.7);
`

export const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    background-color: white;

    border-radius: 8px;

    width: calc(100% - 40px);
    max-width: 438px;
    height: 434px;
    padding: 30px 40px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;
`

export const ModalIcon = styled.div`    
    width: 159px;
    height: 159px;
    
    border: 6px solid #E4E4E4;
    border-radius: 9999px;
    background-color: #DB25250F;

    display: flex;
    align-items: center;
    justify-content: center;

    &>img {
        width: 68px;
        height: 68px;
    }    
`

export const ModalMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ModalActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding-top: 20px;

    border-top: 1px solid #E4E4E4;
`

export const ModalButton = styled.button<{ $isFilled?: boolean }>`
    background-color: ${p => p.$isFilled ? "#DB2525" : "white"};
    color: ${p => p.$isFilled ? "white" : "#DB2525"};

    border: 1px solid #DB2525;
    border-radius: 8px;

    font-size: 18px;
    font-weight: 500;

    width: 160px;
    height: 48px;

    cursor: pointer;

    transition: all 0.3s ease; 

    &:hover {
        background-color: ${p => p.$isFilled ? "#cB1111" : "rgba(219, 37, 37, .2)"};
    }
`

export const ModalTitle = styled.h1`
    color: #DB2525;
    font-size: 32px;
    font-weight: bold;

    text-align: center;
`

export const ModalDescription = styled.div`
    color: #454545;
    font-size: 12px;
    font-weight: bold;

    text-align: center;
`


export const ModalDivCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    flex-direction: column;

    flex: 1;

`

export const Close = styled.div`
    background-color: #E76316;
    color: white;

    width: 34px;
    height: 34px;
    border-radius: 999px;

    position: absolute;
    top: -17px;
    right: -17px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;

    cursor: pointer;

    transition: all 0.3s ease; 

    &:hover {
        background-color: #d55113;
    }
`