import React from "react";
import { shallow } from "enzyme";

const configure = require("enzyme").configure;
const Adapter = require("enzyme-adapter-react-14");
const Test = require("../Test.js").default;

configure({ adapter: new Adapter() });

describe("Test", () => {
	it("should be defined", () => {
		expect(Test).toBeDefined();
	});
	it("should render correctly", () => {
		const tree = shallow(<Test name="Test test" />);
		expect(tree).toMatchSnapshot();
	});
});
