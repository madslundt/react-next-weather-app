import React from "react";
import { useRouter } from "next/router";

import useWeather, { IError, IWeather } from "../components/useWeather";
import WeatherInformation from "../components/weatherInformation";
import FormSearch from "../components/formSearch";
import { getWeatherByCity } from "../providers/getWeather.provider";
import "../style.css";
import { NextPageContext } from "next";

interface IProps {
    cityName: string;
    weather?: IWeather;
    error?: IError;
}

const Home = (props: IProps) => {
    const { weather, setCityName, cityName, error, isFetching } = useWeather(
        props
    );
    const router = useRouter();

    const handleCityChange = (city: string) => {
        setCityName(city);

        const href = `/?city=${city}`;
        router.replace(href, href, { shallow: true });
    };

    return (
        <div className="max-w-sm mx-auto my-4 bg-white overflow-hidden">
            <div className="rounded overflow-hidden border border-blue-200">
                <div className="bg-blue-100 p-2 text-blue-300">
                    Weather in <span className="font-bold">{cityName}</span>
                </div>

                {!!error && <p className="p-2 text-center">{error.message}</p>}

                <WeatherInformation {...weather} />

                <FormSearch
                    submit={handleCityChange}
                    searchText={isFetching ? "Loading" : "Search"}
                />
            </div>
        </div>
    );
};

Home.getInitialProps = async ({ query }: NextPageContext): Promise<IProps> => {
    let cityName = "Copenhagen";
    if (query.city && typeof query.city === "string") {
        cityName = query.city;
    }

    try {
        const { data } = await getWeatherByCity(cityName);

        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const windDegree = data.wind.deg;

        return {
            cityName: cityName,
            weather: {
                temperature,
                humidity,
                windSpeed,
                windDegree
            }
        };
    } catch (exception) {
        return {
            cityName: cityName,
            error: { ...(exception.response && exception.response.data) }
        };
    }
};

export default Home;
