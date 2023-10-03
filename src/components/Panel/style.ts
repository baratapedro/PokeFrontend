import styled from 'styled-components'

export const PanelOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-color: rgba(0,0,0,.7);
`

export const PanelContainer = styled.div<{ $isOpen?: boolean }>`
    position: fixed;
    top: 0;
    right: 0;

    width: 100%;
    max-width: 642px;

    height: 100vh;
    background-color: white;

    padding: 30px 30px;
`;

export const PanelTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 32px;
    color: #5F1478;
    font-weight: bold;
`

export const PanelForm = styled.form`
    display: flex;
    flex-direction: column;

    gap: 50px;

    border-top: 1px solid #D4D4D4;

    padding: 40px 0;
    margin: 25px 0;
`

export const PanelFormField = styled.div`
    display: flex;
    flex-direction: column;

    gap: 15px;

    &>label {
        font-size: 14px;
        font-weight: bold;
        color: #454545;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    border: 1px solid #B9B9B9;
    border-radius: 8px;
    height: 60px;
    padding-right: 5px;
    padding-left: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 18px;
    font-weight: lighter;
    color: #757575;

    @media screen and (max-width: 520px) {
        font-size: 15px;
    }
`

export const TitleInput = styled.input`
    width: 100%;

    border: none;       
    font-size: 18px;
    font-weight: lighter;
    color: #757575;

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 520px) {
        font-size: 15px;
    }
`

export const FileInputLabel = styled.label`
  cursor: pointer;
  border: 1px solid #E76316;
  border-radius: 8px;
  padding: 5px;
  border-radius: 5px;

  color: #E76316;
  font-weight: bold;
  height: 50px;
  width: 224px;

  display: flex;
  align-items: center;
  justify-content: center;

    @media screen and (max-width: 520px) {
        font-size: 15px;
    }

`;


export const PanelButton = styled.button<{ $isFilled?: boolean }>`
    width: 167px;
    height: 48px;

    background-color: ${p => p.$isFilled ? "#E76316" : "white"};
    color: ${p => p.$isFilled ? "white" : "#E76316"};

    border: 1px solid #E76316;
    border-radius: 8px;

    font-size: 18px;
    cursor: pointer;

    display: ${p => p.$isFilled ? "block" : "none"};

    transition: all 0.3s ease; 

    &:hover {
        background: ${p => p.$isFilled ? "#d55113" : "rgba(231, 99, 22, .2)"};
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        width: 140px;
        height: 48px;

        display: block;
    }
`

export const JustifyContentEndDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;

    border-top: 1px solid #D4D4D4;

    padding: 30px 0;

    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`

export const ErrorMessage = styled.div`
    color: red;
    font-size: 15px;
    font-weight: bold;
`