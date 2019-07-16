import React from "react";
import { shallow } from "enzyme";
import { random } from "faker";

import WeatherInformation, { getWindDirection } from "../weatherInformation";

describe("<WeatherInformation />", () => {
    it("Should render and match snapshot", () => {
        const component = shallow(
            <WeatherInformation
                humidity={0}
                temperature={1}
                windSpeed={2}
                windDegree={3}
            />
        );

        component.update();

        expect(component).toMatchSnapshot();
    });

    it("Should calculate windDirection when windDegree is set", () => {
        // TODO
    });
});

describe("getWindDirection", () => {
    it("Should return 'nord' when degree is 0", () => {
        const degree = 0;
        const expectedDirection = "nord";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });
    it("Should return 'nord' when degree is 360", () => {
        const degree = 360;
        const expectedDirection = "nord";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });

    it("Should return 'øst' when degree is 90", () => {
        const degree = 90;
        const expectedDirection = "øst";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });

    it("Should return 'syd' when degree is 180", () => {
        const degree = 180;
        const expectedDirection = "syd";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });

    it("Should return 'vest' when degree is 270", () => {
        const degree = 270;
        const expectedDirection = "vest";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });

    it("Should return 'nordøst' when degree is between 1 and 89 degrees", () => {
        const degree = random.number({
            min: 1,
            max: 89
        });
        const expectedDirection = "nordøst";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });

    it("Should return 'sydøst' when degree is between 91 and 179", () => {
        const degree = random.number({
            min: 91,
            max: 179
        });
        const expectedDirection = "sydøst";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });

    it("Should return 'sydvest' when degree is between 181 and 269", () => {
        const degree = random.number({
            min: 181,
            max: 269
        });
        const expectedDirection = "sydvest";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });

    it("Should return 'nordvest' when degree is between 271 and 359", () => {
        const degree = random.number({
            min: 271,
            max: 359
        });
        const expectedDirection = "nordvest";

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBe(expectedDirection);
    });

    it("Should return null when degree is less than 0", () => {
        const degree = random.number({
            max: -1
        });

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBeNull();
    });
    it("Should return null when degree is greater than 360", () => {
        const degree = random.number({
            min: 361,
        });

        const actualDirection = getWindDirection(degree);

        expect(actualDirection).toBeNull();
    });
});
