import React from "react";
import { shallow } from "enzyme";
import { random } from "faker";

import Home from "../index";
import { IError } from "../../components/useWeather";


describe("<Home />", () => {
    it("Should render and match snapshot", () => {
        const component = shallow(<Home cityName="cityName" />);

        component.update();

        expect(component).toMatchSnapshot();
    });

    it("Should call 'setCityName' when 'handleCityChange' is called", () => {
        // TODO
    });

    it("Should replace router with '?city={city}' when 'handleCityChange' is called", () => {
        // TODO
    });

    it("Should replace router with options 'shallow = true' when 'handleCityChange' is called", () => {
        // TODO
    });

    it("Should send props.cityName to useWeather", () => {
        // TODO
    });
    it("Should send props.weather to useWeather", () => {
        // TODO
    });
    it("Should send props.error to useWeather", () => {
        // TODO
    });
});

describe("getInitalProps", () => {
    it("Should return 'Copenhagen' as default cityName", async () => {
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {}
        });

        const actualCityName = initialProps.cityName;

        expect(actualCityName).toBe("Copenhagen");
    });

    it("Should return same cityName as query.city", async () => {
        const expectedCityName = random.word();

        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: expectedCityName
            }
        });
        const actualCityName = initialProps.cityName;

        expect(actualCityName).toBe(expectedCityName);
    });

    it("Should return 'Copenhagen' as default cityName when query.city is a list", async () => {
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: []
            }
        });
        const actualCityName = initialProps.cityName;

        expect(actualCityName).toBe("Copenhagen");
    });
    it("Should return 'Copenhagen' as default cityName when query.city is an object", async () => {
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: {} as any
            }
        });
        const actualCityName = initialProps.cityName;

        expect(actualCityName).toBe("Copenhagen");
    });
    it("Should return 'Copenhagen' as default cityName when query.city is a number", async () => {
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: random.number() as any
            }
        });
        const actualCityName = initialProps.cityName;

        expect(actualCityName).toBe("Copenhagen");
    });

    it("Should call 'getWeatherByCity' when using default cityName", async () => {
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {}
        });

        // spy
        // TODO
    });
    it("Should call 'getWeatherByCity' when using query.city", async () => {
        const expectedCityName = random.word();
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: expectedCityName
            }
        });

        // spy
        // TODO
    });
    it("Should return cityName when calling 'getWeatherByCity' successfully", async () => {
        const expectedCityName = random.word();
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: expectedCityName
            }
        });

        // spy
        // TODO
    });
    it("Should return weather when calling 'getWeatherByCity' successfully", async () => {
        const expectedCityName = random.word();
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: expectedCityName
            }
        });

        // spy
        // TODO
    });
    it("Should return cityName when calling 'getWeatherByCity' unsuccessfully", async () => {
        const expectedCityName = random.word();
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: expectedCityName
            }
        });

        // spy
        // TODO
    });
    it("Should return weather when calling 'getWeatherByCity' unsuccessfully", async () => {
        const expectedCityName = random.word();
        const initialProps = await Home.getInitialProps({
            pathname: "",
            query: {
                city: expectedCityName
            }
        });

        // spy
        // TODO
    });
});
