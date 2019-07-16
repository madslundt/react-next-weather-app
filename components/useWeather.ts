import { useState, useEffect } from "react";

import { getWeatherByCity } from "../providers/getWeather.provider";

const useWeather = (props: IProps = {}) => {
    const [weather, setWeather] = useState<IWeather | undefined>(props.weather);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [error, setError] = useState<IError | undefined>(props.error);
    const [cityName, setCityName] = useState<string | undefined>(
        props.cityName
    );

    const resetWeather = () => {
        setWeather(undefined);
    };

    const fetchWeather = async () => {
        try {
            if (!cityName) {
                return;
            }

            setIsFetching(true);
            setError(undefined);
            resetWeather();

            const { data } = await getWeatherByCity(cityName);

            setWeather({
                temperature: data.main.temp,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                windDegree: data.wind.deg
            });
        } catch (exception) {
            setError({
                message: "Unknown error",
                status: 0,
                ...(exception.response && exception.response.data)
            });
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        if (!!cityName) {
            fetchWeather();
        }
    }, [cityName]);

    return {
        weather,
        setCityName,
        cityName,
        error,
        isFetching
    };
};

export interface IProps {
    cityName?: string;
    error?: IError;
    weather?: IWeather;
}

export interface IWeather {
    temperature: number;
    humidity: number;
    windSpeed: number;
    windDegree: number;
}

export interface IError {
    message?: string;
    status: number;
}

export default useWeather;
