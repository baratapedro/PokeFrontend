import { ConditionHeader, HeaderContainer, HeaderLogo, TemperatureHeader, WeatherCondtionsContainer } from "./style";

import { useEffect, useState } from "react";
import axios from "axios";

import logo from "../../assets/logo-teste.svg"
import castform from '../../assets/castform.png'

interface IWeather {
    id: number,
    state: string,
    data: {
        temperature: number,
        condition: string
    }
}

export function Header() {
    const [weather, setWeather] = useState<IWeather>()

    useEffect(() => {
        getWeather()
    }, [])

    async function getWeather() {
       const response = await axios.get(`https://apiadvisor.climatempo.com.br/api/v1/weather/locale/5959/current?token=${import.meta.env.VITE_KEY_CLIMATEMPO}`);

        setWeather(response.data)
    }

    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="" />
            <WeatherCondtionsContainer>
                <div>
                    <TemperatureHeader>{weather?.state} {weather?.data.temperature}°C</TemperatureHeader>
                    <ConditionHeader>{weather?.data.condition}</ConditionHeader>
                </div>
                <img src={castform} alt="" />
            </WeatherCondtionsContainer>
        </HeaderContainer>
    )
}