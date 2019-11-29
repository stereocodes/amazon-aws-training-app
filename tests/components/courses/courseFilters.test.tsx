import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import CourseFilters from "../../../src/components/courses/courseFilters";

describe("<CourseFilters/>", () => {
  const props = {children: (<button>hello world</button>)};
  const wrapper = mount(
    <CourseFilters {...props} />
  );
  it("should mount", () => {
    expect(wrapper.find("div").exists()).to.equal(true);
  });
  it("should render children", () => {
    expect(wrapper.props().children).to.equal(props.children);
    expect(wrapper.find('button').exists()).to.equal(true);
  });
});
