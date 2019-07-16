import api from "./api";
import config from "../config.json";
import { IGetWeatherResponse } from "./getWeather.interface";

const getWeatherByCity = (city: string) => {
    const encodedCity = city
        .toLowerCase()
        .replace("æ", "ae")
        .replace("ø", "o")
        .replace("å", "aa");

    return api.get<IGetWeatherResponse>(
        `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            encodedCity
        )},dk&appid=${config && config.apiKey}&units=metric`
    );
};

export { getWeatherByCity };
