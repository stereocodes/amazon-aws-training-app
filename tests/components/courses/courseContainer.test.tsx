import React,{ReactNode} from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import CourseContainer from "../../../src/components/courses/courseContainer";

describe("<CourseContainer/>", () => {
  const wrapper = mount(
    <CourseContainer />
  );
  it("should mount", () => {
    expect(wrapper.find("div").exists()).to.equal(true);
  });
});
