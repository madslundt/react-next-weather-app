export interface IGetWeatherResponse {
    coord: ICoord;
    weather: IWeather[];
    base: string;
    main: IMain;
    wind: IWind;
    clouds: ICloud;
    dt: number;
    sys: ISys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface IGetWeatherResponseError {
    message: string;
    status: number;
}

interface ICoord {
    lon: number;
    lat: number;
}

interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface IMain {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

interface IWind {
    speed: number;
    deg: number;
}

interface ICloud {
    all: number;
}

interface ISys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}
