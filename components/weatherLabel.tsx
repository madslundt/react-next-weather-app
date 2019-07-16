import React from "react";

const WeatherLabel = ({ label, value, unit }: IProps) => (
    <span>
        {label}:
        <span className="font-bold">
            {value !== undefined && value >= 0 && (
                <>
                    &nbsp;
                    {value}
                </>
            )}
            {unit && value !== undefined && value >= 0 && (
                <>
                    &nbsp;
                    {unit}
                </>
            )}
        </span>
    </span>
);

interface IProps {
    label: string;
    value?: number;
    unit?: string;
}

export default WeatherLabel;
