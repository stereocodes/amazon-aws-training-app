import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import CourseCardTag from "../../../src/components/courses/courseCardTag";

describe("<CourseCardTag />", () => {
  const props = {
    type: "skill",
    label: "hello world"
  };
  const wrapper = mount(<CourseCardTag {...props} />);
  it("should mount", () => {
    expect(wrapper.find("span").exists()).to.equal(true);
  });
  it("should accept a type", () => {
    expect(wrapper.props().type).to.equal(props.type);
  });
  it("should accept an label", () => {
    expect(wrapper.props().label).to.equal(props.label);
  });
});
