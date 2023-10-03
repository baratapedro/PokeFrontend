import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background: linear-gradient(to right, #601478, #982271);
    width: 100%;
    height: 64px;
    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: white;

    @media screen and (max-width: 500px) {
       padding: 10px;
    }

`

export const HeaderLogo = styled.img`
     @media screen and (max-width: 500px) {
        width: 150px;
        height: 27px;
    }
`

export const WeatherCondtionsContainer = styled.div`   
        display: flex;
        align-items: center;
        gap:20px;

        &>img {
            width: 50px;
            height: 50px;

            @media screen and (max-width: 500px) {
                display: none;
            }
        }
`

export const TemperatureHeader = styled.div`
    font-size: 22px;
    font-weight: 500;

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`

export const ConditionHeader = styled.div`
     font-size: 16px;

     @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`