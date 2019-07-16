import React from "react";
import { shallow } from "enzyme";

import FormSearch from "../formSearch";
import { random } from "faker";

describe("<FormSearch />", () => {
    it("Should render and match snapshot", () => {
        const component = shallow(<FormSearch submit={_ => {}} />);

        component.update();

        expect(component).toMatchSnapshot();
    });
});

describe("Input field", () => {
    it("Should exist", () => {
        const component = shallow(<FormSearch submit={_ => {}} />);
        const inputWrapper = () => component.find("input[name='city']");

        expect(inputWrapper).toBeTruthy();
    });
    it("Should update value onChange", () => {
        const expectedValue = random.word();

        const component = shallow(<FormSearch submit={_ => {}} />);
        const inputWrapper = () => component.find("input[name='city']");

        inputWrapper().simulate("change", {
            currentTarget: { value: expectedValue }
        });

        const actualValue = inputWrapper().props().value;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should be required", () => {
        const component = shallow(<FormSearch submit={_ => {}} />);
        const inputWrapper = () => component.find("input[name='city']");

        const actualRequired = inputWrapper().props().required;
        expect(actualRequired).toBe(true);
    });
});

describe("Button", () => {
    it("Should exist", () => {
        const component = shallow(<FormSearch submit={_ => {}} />);
        const buttonWrapper = () => component.find("button[type='submit']");

        expect(buttonWrapper).toBeTruthy();
    });
    it("Should set searchText", () => {
        const expectedSearchText = "test";

        const component = shallow(
            <FormSearch submit={_ => {}} searchText={expectedSearchText} />
        );
        const buttonWrapper = () => component.find("button[type='submit']");

        const actualSearchText = buttonWrapper().text();
        expect(actualSearchText).toBe(expectedSearchText);
    });

    it("Should have type = submit", () => {
        const mockSubmit = jest.fn();
        const component = shallow(<FormSearch submit={mockSubmit} />);
        const buttonWrapper = () => component.find("button[type='submit']");

        const actualType = buttonWrapper().props().type;

        expect(actualType).toBe("submit");
    });
});

describe("Form", () => {
    it("Should exist", () => {
        const component = shallow(<FormSearch submit={_ => {}} />);
        const formWrapper = () => component.find("form");

        expect(formWrapper).toBeTruthy();
    });
    it("Should submit term one time", () => {
        const expectedTerm = random.word();

        const mockSubmit = jest.fn();
        const component = shallow(<FormSearch submit={mockSubmit} />);
        const formWrapper = () => component.find("form");
        const inputWrapper = () => component.find("input[name='city']");

        inputWrapper().simulate("change", {
            currentTarget: { value: expectedTerm }
        });
        formWrapper().simulate("submit");

        const actualMockArgs = mockSubmit.mock.calls[0];
        expect(actualMockArgs.length).toBe(1);
        expect(actualMockArgs[0]).toBe(expectedTerm);
    });

    it("Should reset state after submit", () => {
        const term = random.word();

        const component = shallow(<FormSearch submit={_ => {}} />);
        const formWrapper = () => component.find("form");
        const inputWrapper = () => component.find("input[name='city']");

        inputWrapper().simulate("change", { currentTarget: { value: term } });
        formWrapper().simulate("submit");

        const actualValue = inputWrapper().props().value;
        expect(actualValue).toBe("");
    });

    it("Should prevent default", () => {
        const term = random.word();
        const mockEvent = { preventDefault: jest.fn() };

        const component = shallow(<FormSearch submit={_ => {}} />);
        const formWrapper = () => component.find("form");
        const inputWrapper = () => component.find("input[name='city']");

        inputWrapper().simulate("change", { currentTarget: { value: term } });
        formWrapper().simulate("submit", mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
});
