import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import CourseBookmarkButton from "../../../src/components/courses/courseBookmarkButton";

describe("<CourseBookmarkButton/>", () => {

  const wrapper = mount(<CourseBookmarkButton  />);
  it("should mount", () => {
    expect(wrapper.find("button").exists()).to.equal(true);
  });
});