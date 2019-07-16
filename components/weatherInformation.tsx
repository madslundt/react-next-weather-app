import React, { useMemo } from "react";
import WeatherLabel from "./weatherLabel";

const getWindDirection = (windDegree: number): WindDirection => {
    switch (windDegree) {
        case 0:
        case 360:
            return "nord";
        case 90:
            return "øst";
        case 180:
            return "syd";
        case 270:
            return "vest";
    }

    if (windDegree > 0 && windDegree < 90) {
        return "nordøst";
    } else if (windDegree > 90 && windDegree < 180) {
        return "sydøst";
    } else if (windDegree > 180 && windDegree < 270) {
        return "sydvest";
    } else if (windDegree > 270 && windDegree < 360) {
        return "nordvest";
    }

    return null;
};

const WeatherInformation = ({
    temperature,
    humidity,
    windSpeed,
    windDegree
}: IProps) => {
    const windDirection = useMemo(
        () => windDegree && getWindDirection(windDegree),
        [windDegree]
    );

    return (
        <ul>
            <li className="border-b border-panel-info p-2">
                <WeatherLabel
                    label="Temperature"
                    value={temperature && Math.round(temperature)}
                    unit="&deg;C"
                />
            </li>

            <li className="border-b border-panel-info p-2">
                <WeatherLabel
                    label="Humidity"
                    value={humidity && Math.round(humidity)}
                />
            </li>

            <li className="border-b border-panel-info p-2">
                <WeatherLabel
                    label="Wind"
                    value={windSpeed && Math.round(windSpeed)}
                    unit={`m/s ${windDirection || ""}`}
                />
            </li>
        </ul>
    );
};

interface IProps {
    temperature?: number;
    humidity?: number;
    windSpeed?: number;
    windDegree?: number;
}

export type WindDirection =
    | "nord"
    | "øst"
    | "syd"
    | "vest"
    | "nordøst"
    | "sydøst"
    | "sydvest"
    | "nordvest"
    | null;

export { getWindDirection };

export default WeatherInformation;
