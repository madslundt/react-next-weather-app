import { random } from "faker";
import init from "jooks";

import useWeather, { IWeather } from "../useWeather";
import * as getWeather from "../../providers/getWeather.provider";

describe("useWeather", () => {
    const initialWeather: IWeather = {
        humidity: random.number(),
        temperature: random.number(),
        windSpeed: random.number(),
        windDegree: random.number({
            min: 0,
            max: 360
        })
    };

    const initialCityName = random.word();

    const jooks = init(() =>
        useWeather({
            weather: initialWeather,
            cityName: initialCityName
        })
    );

    const getWeatherByCitySpy = jest.spyOn(getWeather, "getWeatherByCity");

    afterEach(() => {
        getWeatherByCitySpy.mockClear();
    });

    it("Should set weather from props", async () => {
        const { weather: actualWeather } = jooks.run();
        await jooks.wait();

        expect(actualWeather).toBe(initialWeather);
    });

    it("Should set cityName from props", async () => {
        const { cityName: actualCityName } = jooks.run();
        await jooks.wait();

        expect(actualCityName).toBe(initialCityName);
    });
    it("Should call 'getWeatherByCity' on cityName change", async () => {
        jooks.run().setCityName(random.word());
        await jooks.wait();

        expect(getWeatherByCitySpy).toHaveBeenCalled();
    });
    it("Should call 'getWeatherByCity' with cityName as argument", async () => {
        const expectedCity = random.word();

        jooks.run().setCityName(expectedCity);
        await jooks.wait();

        expect(getWeatherByCitySpy).toBeCalledWith(expectedCity);
    });

    it("Should not call 'getWeatherByCity' when cityName is changed to ''", async () => {
        jooks.run().setCityName("");
        await jooks.wait();

        expect(getWeatherByCitySpy).not.toHaveBeenCalled();
    });
    it("Should set temperature when fetched successfully", async () => {
        const cityName = random.word();
        const expectedTemperature = random.number();
        getWeatherByCitySpy.mockResolvedValue({
            data: {
                main: {
                    temp: expectedTemperature
                },
                wind: {}
            }
        } as any);

        await jooks.mount();
        jooks.run().setCityName(cityName);
        await jooks.wait();

        const { weather } = jooks.run();

        const actualTemperature = weather && weather.temperature;
        expect(actualTemperature).toBe(expectedTemperature);
    });
    it("Should set humidity when fetched successfully", async () => {
        const cityName = random.word();
        const expectedHumidity = random.number();
        getWeatherByCitySpy.mockResolvedValue({
            data: {
                main: {
                    humidity: expectedHumidity
                },
                wind: {}
            }
        } as any);

        await jooks.mount();
        jooks.run().setCityName(cityName);
        await jooks.wait();

        const { weather } = jooks.run();

        const actualHumidity = weather && weather.humidity;
        expect(actualHumidity).toBe(expectedHumidity);
    });
    it("Should set windSpeed when fetched successfully", async () => {
        const cityName = random.word();
        const expectedWindSpeed = random.number();
        getWeatherByCitySpy.mockResolvedValue({
            data: {
                main: {},
                wind: {
                    speed: expectedWindSpeed
                }
            }
        } as any);

        await jooks.mount();
        jooks.run().setCityName(cityName);
        await jooks.wait();

        const { weather } = jooks.run();

        const actualWindSpeed = weather && weather.windSpeed;
        expect(actualWindSpeed).toBe(expectedWindSpeed);
    });
    it("Should set windDegree when fetched successfully", async () => {
        const cityName = random.word();
        const expectedWindDegree = random.number({
            min: 0,
            max: 360
        });
        getWeatherByCitySpy.mockResolvedValue({
            data: {
                main: {},
                wind: {
                    deg: expectedWindDegree
                }
            }
        } as any);

        await jooks.mount();
        jooks.run().setCityName(cityName);
        await jooks.wait();

        const { weather } = jooks.run();

        const actualWindDegree = weather && weather.windDegree;
        expect(actualWindDegree).toBe(expectedWindDegree);
    });
    it("Should set error when fetched unsuccessfully", async () => {
        const cityName = random.word();
        const expectedMessage = random.words();
        getWeatherByCitySpy.mockRejectedValue({
            response: {
                data: {
                    message: expectedMessage
                }
            }
        } as any);

        await jooks.mount();
        jooks.run().setCityName(cityName);
        await jooks.wait();

        const { error } = jooks.run();

        const actualMessage = error && error.message;
        expect(actualMessage).toBe(expectedMessage);
    });
});
