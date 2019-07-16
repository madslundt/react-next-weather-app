import React from "react";
import { shallow } from "enzyme";
import { random } from "faker";

import WeatherLabel from "../weatherLabel";

describe("<WeatherLabel />", () => {
    it("Should render and match snapshot", () => {
        const component = shallow(
            <WeatherLabel label="label" unit="unit" value={1} />
        );

        component.update();

        expect(component).toMatchSnapshot();
    });

    it("Should always show label", async () => {
        const expectedLabel = random.word();

        const component = shallow(<WeatherLabel label={expectedLabel} />);

        const html = component.html();

        expect(html).toContain(expectedLabel);
    });
    it("Should show value if value is greater than 0", async () => {
        const expectedValue = random.number({
            min: 0,
        });

        const component = shallow(
            <WeatherLabel label={""} value={expectedValue} />
        );

        const html = component.html();;

        expect(html).toContain(expectedValue.toString());
    });
    it("Should not show undefined when value is not set", async () => {
        const component = shallow(<WeatherLabel label={""} />);

        const html = component.html();

        expect(html).not.toContain("undefined");
    });
    it("Should show value if value is 0", async () => {
        const expectedValue = 0;

        const component = shallow(
            <WeatherLabel label={""} value={expectedValue} />
        );

        const html = component.html();

        expect(html).toContain(expectedValue);
    });
    it("Should show unit if unit is set", async () => {
        const expectedUnit = random.word();

        const component = shallow(
            <WeatherLabel label={""} value={1} unit={expectedUnit} />
        );

        const html = component.html();

        expect(html).toContain(expectedUnit);
    });
    it("Should not show undefined when unit is not set", async () => {
        const component = shallow(<WeatherLabel label={""} value={1} />);

        const html = component.html();

        expect(html).not.toContain("undefined");
    });
    it("Should not show unit when value is undefined", async () => {
        const expectedUnit = random.word();

        const component = shallow(
            <WeatherLabel label={""} unit={expectedUnit} />
        );

        const html = component.html();

        expect(html).not.toContain(expectedUnit);
    });
    it("Should show unit when unit is set and value is 0", async () => {
        const expectedUnit = random.word();

        const component = shallow(
            <WeatherLabel label={""} value={1} unit={expectedUnit} />
        );

        const html = component.html();

        expect(html).toContain(expectedUnit);
    });
});
